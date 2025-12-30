import '../styles/About.css';

export function About() {
  return (
    <div className="about-section">
      <div className="container">
        <h1 className="about-title">About Nats Brownies</h1>
        
        <section className="about-content">
          <div className="about-block">
            <h2>Our Story</h2>
            <p>
              Nats Brownies started as a passion project, born from a love of baking and 
              a desire to share delicious, homemade brownies with the world. What began as 
              a small home-based venture has grown into a beloved local business, known for 
              quality ingredients, attention to detail, and that perfect chocolatey taste 
              that keeps customers coming back for more.
            </p>
            <p>
              Every brownie is baked with care, using the finest ingredients and traditional 
              recipes that have been perfected over time. We believe that great brownies 
              should be accessible to everyone, which is why we offer both egg and eggless 
              varieties, ensuring everyone can enjoy our delicious treats.
            </p>
          </div>

          <div className="about-block">
            <h2>Meet the Founder</h2>
            <div className="founder-info">
              <h3>Varshini Manikandan</h3>
              <p>
                Varshini Manikandan is the heart and soul behind Nats Brownies. With a 
                passion for baking that started in her home kitchen, Varshini has turned 
                her love for creating delicious desserts into a thriving business.
              </p>
              <p>
                Her journey began with experimenting with different recipes, perfecting 
                the art of making brownies that are rich, fudgy, and full of flavor. 
                Varshini's dedication to quality and her commitment to using only the 
                best ingredients has earned Nats Brownies a loyal following of customers 
                who appreciate homemade goodness.
              </p>
              <p>
                When she's not baking, Varshini loves sharing her creations on social media, 
                connecting with the community, and constantly innovating with new flavors 
                and combinations. Her goal is simple: to bring joy to people's lives, 
                one brownie at a time.
              </p>
            </div>
          </div>

          <div className="about-block">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <a 
                    href="https://wa.me/918428382877" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    +91 84283 82877
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📷</span>
                <div>
                  <h4>Instagram</h4>
                  <a 
                    href="https://instagram.com/nats_vlog29" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    @nats_vlog29
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <a 
                    href="mailto:nats.brownies@example.com" 
                    className="contact-link"
                  >
                    nats.brownies@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

