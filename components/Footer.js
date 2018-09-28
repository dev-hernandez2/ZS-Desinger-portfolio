import Link from 'next/link'

const Footer = () => (
 <footer class="footer">
    <div class="container">
        <section className="footer-container">
            <div class="columns">
                <div class="column has-text-left has-text-centered-mobile">
                    <p>Copyright ©  2018  Zoraida Salcedo</p>
                    <Link href="/terms-of-use-and-privacy-policy"> 
                        <a className="is-underline-hover is-text-color">Terms of Use & Privacy Policy</a>
                    </Link>
                </div>
                <div class="column has-text-right has-text-centered-mobile">
                    <a href="https://twitter.com/ZoraidaSalcedo" target="_blank" className="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/zoraidasalcedo/" target="_blank" className="social-icon"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
    </div>
  </footer>
)


export default Footer
