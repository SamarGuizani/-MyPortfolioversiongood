-- Create a function to send email notifications
CREATE OR REPLACE FUNCTION send_contact_notification()
RETURNS TRIGGER AS $$
BEGIN
  -- This function will be triggered when a new contact is inserted
  -- You can use this with Supabase Edge Functions for email sending
  
  PERFORM net.http_post(
    url := 'https://your-project.supabase.co/functions/v1/send-email',
    headers := '{"Content-Type": "application/json", "Authorization": "Bearer ' || current_setting('app.jwt_token') || '"}'::jsonb,
    body := json_build_object(
      'to', 'guizanisamar@ieee.org',
      'subject', 'Nouveau message de ' || NEW.name || ': ' || NEW.subject,
      'name', NEW.name,
      'email', NEW.email,
      'subject', NEW.subject,
      'message', NEW.message
    )::text
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically send email when new contact is added
DROP TRIGGER IF EXISTS contact_notification_trigger ON contacts;
CREATE TRIGGER contact_notification_trigger
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION send_contact_notification();
