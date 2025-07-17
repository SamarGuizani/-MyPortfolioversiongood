-- Test the contact system by inserting a test message
INSERT INTO contacts (name, email, subject, message) 
VALUES (
  'Test Contact', 
  'test@gmail.com', 
  'Testing Contact Form', 
  'This is a test message to verify the contact system is working properly.'
);

-- Check if the message was inserted successfully
SELECT 
  id,
  name,
  email,
  subject,
  LEFT(message, 50) || '...' as message_preview,
  created_at
FROM contacts 
ORDER BY created_at DESC 
LIMIT 5;

-- Check email domain validation
SELECT is_valid_email_domain('test@gmail.com') as gmail_valid;
SELECT is_valid_email_domain('test@ieee.org') as ieee_valid;
SELECT is_valid_email_domain('test@invalid.xyz') as invalid_domain;

-- Clean up test data (optional)
-- DELETE FROM contacts WHERE name = 'Test Contact';
