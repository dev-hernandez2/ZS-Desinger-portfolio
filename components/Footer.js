import Link from 'next/link'

const Footer = () => (
 <footer class="footer">
    <div class="container">
        <section className="footer-container">
            <div class="columns">
                <div class="column has-text-left has-text-centered-mobile">
                    <p>Copyright ©  2018  Zoraida Salcedo</p>
                    <p>Terms of Use & Privacy Policy</p>
                </div>
                <div class="column has-text-right has-text-centered-mobile">
                    <a href="#" className="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
    </div>
  </footer>
)


export default Footer
