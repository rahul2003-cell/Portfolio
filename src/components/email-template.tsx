import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '10px'
  }}>
    {/* Header */}
    <div style={{
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '10px 10px 0 0',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{ margin: 0, fontSize: '24px' }}>Rahul Nagare Portfolio</h1>
      <p style={{ margin: '5px 0 0', opacity: 0.8 }}>New Contact Form Submission</p>
    </div>

    {/* Content */}
    <div style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '0 0 10px 10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* From Section */}
      <div style={{ marginBottom: '25px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          From
        </div>
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#1f2937'
        }}>
          {fullName}
        </div>
      </div>

      {/* Email Section */}
      <div style={{ marginBottom: '25px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          Email
        </div>
        <div style={{
          fontSize: '16px',
          color: '#3b82f6'
        }}>
          <a href={`mailto:${email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
            {email}
          </a>
        </div>
      </div>

      {/* Message Section */}
      <div style={{ marginBottom: '25px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#6b7280',
          textTransform: 'uppercase',
          marginBottom: '8px'
        }}>
          Message
        </div>
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '15px',
          lineHeight: '1.6',
          color: '#374151',
          borderLeft: '4px solid #3b82f6'
        }}>
          {message}
        </div>
      </div>

      {/* Reply Button */}
      <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
        <a href={`mailto:${email}`} style={{
          display: 'inline-block',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '600'
        }}>
          Reply to {fullName}
        </a>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '30px',
        fontSize: '12px',
        color: '#9ca3af',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb',
        paddingTop: '20px'
      }}>
        <p>This message was sent from your portfolio contact form.</p>
        <p>© {new Date().getFullYear()} Rahul Nagare | Java Full Stack Developer</p>
      </div>
    </div>
  </div>
);