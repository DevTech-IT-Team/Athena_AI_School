import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section style={{ padding: '80px 0 40px' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0 24px' }}>
        {/* CTA Band – blue→teal gradient matching Edulectual prototype */}
        <div className="ek-band">
          <span className="ek-blob" style={{ width: 260, height: 260, background: '#fff', opacity: .07, left: -80, bottom: -120 }} />

          <div className="ek-band-c">
            <h2>Ready to help your child find their path?</h2>
            <p>
              We know choosing the best for your child is important to you. Speak to Athena AI
              School counsellors to understand how online school can help you and your children.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="ek-btn ek-btn-primary">
                Enquire Now <span>→</span>
              </Link>
              <Link to="/resources-downloads" className="ek-btn ek-btn-light">
                Download Brochure
              </Link>
            </div>
          </div>

          {/* Right side – decorative gradient panel (no image override) */}
          <div style={{ position: 'relative', background: 'linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,200,61,.12))' }} />
        </div>
      </div>
    </section>
  );
}

export default CTA;
