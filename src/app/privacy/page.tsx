export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-0 pb-24 bg-white/0">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl prose prose-slate">
                <h1>Privacy Policy</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <p>At Dentex ("we", "us", "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information about you when you visit our website or book an appointment.</p>

                <h2>Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you fill out our appointment form or contact us. This may include:</p>
                <ul>
                    <li>Name</li>
                    <li>Contact information (email, phone number)</li>
                    <li>Appointment preferences (date, time, service)</li>
                    <li>Any other notes you choose to provide</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Schedule and confirm your appointments</li>
                    <li>Communicate with you about our services</li>
                    <li>Improve our website and customer service</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2>Security</h2>
                <p>We implement reasonable security measures to protect your personal information. However, please note that no method of transmission over the Internet is 100% secure.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at info@dentex.co.zw.</p>
            </div>
        </main>
    )
}
