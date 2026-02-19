<?php

// Load environment variables (already loaded via bootstrap.php, but ensuring they're available)
if (!isset($_ENV['MAIL_HOST'])) {
    // Fallback if environment variables aren't loaded
    $_ENV['MAIL_HOST'] = 'smtp.gmail.com';
    $_ENV['MAIL_PORT'] = '587';
    $_ENV['MAIL_USERNAME'] = 'your-email@gmail.com';
    $_ENV['MAIL_PASSWORD'] = 'your-app-password';
    $_ENV['MAIL_ENCRYPTION'] = 'tls';
    $_ENV['MAIL_FROM_ADDRESS'] = 'chetanmanker67@gmail.com';
    $_ENV['MAIL_FROM_NAME'] = 'Pranodaya';
    $_ENV['CONTACT_EMAIL'] = 'contact@Pranodaya.com';
}

// Only process POST requests.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Log form submission attempt
    log_info('Contact form submission received', [
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'timestamp' => date('Y-m-d H:i:s')
    ]);

    // Get the form fields and remove whitespace.
    // NAME
    if(isset($_POST["name"])){
        $name = trim($_POST["name"]);
    }else{
        $name = "hi";
    }

    // EMAIL
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

    // IF PHONE SET
    if(isset($_POST["phone"])){
        $phone = trim($_POST["phone"]);
    }else{
        $phone = "hi";
    }

    // IF MESSAGE SET
    if(isset($_POST["message"])){
        $message = trim($_POST["message"]);
    }else{
        $message = "hi";
    }

    // Log form data for debugging (excluding sensitive information)
    log_debug('Contact form data received', [
        'name_length' => strlen($name),
        'email_provided' => !empty($email),
        'phone_provided' => !empty($phone),
        'message_length' => strlen($message)
    ]);

    // Check that data was sent to the mailer.
    if ( empty($name) OR empty($message) OR empty($phone) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {

        // Log validation failure
        log_warning('Contact form validation failed', [
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'errors' => [
                'name_empty' => empty($name),
                'message_empty' => empty($message),
                'phone_empty' => empty($phone),
                'email_invalid' => !filter_var($email, FILTER_VALIDATE_EMAIL)
            ]
        ]);

        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Set the recipient email address using environment variable
    $recipient = $_ENV['CONTACT_EMAIL'] ?: "contact@Pranodaya.com";

    // Set the email subject.
    $sender = "New contact from $name";

    // Email Header
    $head = " /// Pranodaya Contact Form \\\ ";

    // Build the email content.
    $email_content = "$head\n\n\n";

    if(isset($_POST["name"])){
        $email_content .= "Name: $name\n";
    }

    $email_content .= "Email: $email\n\n";

    // IF SET PHONE
    if(isset($_POST["phone"])){
        $email_content .= "Phone: $phone\n\n";
    }

    // IF SET MESSAGE
    if(isset($_POST["message"])){
        $email_content .= "Message:\n$message\n";
    }

    // Build the email headers using environment variables
    $from_name = $_ENV['MAIL_FROM_NAME'] ?: 'Pranodaya';
    $from_email = $_ENV['MAIL_FROM_ADDRESS'] ?: 'chetanmanker67@gmail.com';

    if(isset($_POST["name"])){
        $email_headers = "From: $from_name <$from_email>";
    }

    // Log email sending attempt
    log_info('Attempting to send contact form email', [
        'recipient' => $recipient,
        'from' => $from_email,
        'subject' => $sender,
        'message_length' => strlen($email_content)
    ]);

    // Send the email.
    if (mail($recipient, $sender, $email_content, $email_headers)) {

        // Log successful email sending
        log_info('Contact form email sent successfully', [
            'recipient' => $recipient,
            'from' => $from_email,
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ]);

        // Set a 200 (okay) response code.
        http_response_code(200);
        echo "Thank You! Your message has been sent.";

    } else {

        // Log email sending failure
        log_error('Failed to send contact form email', [
            'recipient' => $recipient,
            'from' => $from_email,
            'error' => 'mail() function returned false',
            'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
        ]);

        // Set a 500 (internal server error) response code.
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {

    // Log unauthorized access attempt
    log_warning('Unauthorized access to contact form handler', [
        'method' => $_SERVER['REQUEST_METHOD'] ?? 'unknown',
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
    ]);

    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

