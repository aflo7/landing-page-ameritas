import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoStorefrontOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="top-nav-wrapper">
          <div className="top-nav">
            <div>For Industry Professionals</div>
            <div>For Dental Providers</div>
            <div>Claims</div>
            <div>Find a Health Provider</div>
            <div>Contact Us</div>
            <div className="top-sign-in">Sign In</div>
          </div>
        </div>
        <nav>
          <div className="bottom-nav">
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <GiHamburgerMenu size="2rem" color="gray" id="giHamburgerMenu" />
              <img
                src="https://www.ameritas.com/wp-content/uploads/2021/07/logo_header_@2x.png"
                id="ameritasLogo"
              />
            </div>
            <div className="sign-in-wrapper">Sign In</div>
            <div id="faSearch">
              <div>Life</div>
              <div>Wealth</div>
              <div>Health</div>
              <div>Businesses</div>
              <div>About Us</div>

              <FaSearch />
            </div>
          </div>
        </nav>
      </div>

      <main>
        <div className="main-inner">
          <div className="white-wrapper">
            <h1>
              Mockup made by Andres Flores. Ameritas Mockup Page. UI is
              Responsive for mobile and desktop devices.
            </h1>
            <p>
              When you have long-term financial goals, you need a plan. The
              right plan helps you feel good about the future today. That’s what
              you get with Ameritas. When you have long-term financial goals,
              you need a plan. The right plan helps you feel good about the
              future today. That’s what you get with Ameritas.
            </p>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IoStorefrontOutline color="gray" size="2rem" />
                <div>
                  Invest in your{' '}
                  <span
                    style={{
                      color: 'rgb(49, 107, 197)',
                      textDecoration: 'underline'
                    }}
                  >
                    health
                  </span>
                  .
                </div>
              </div>

              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IoStorefrontOutline color="gray" size="2rem" />
                <div>
                  Invest in your{' '}
                  <span
                    style={{
                      color: 'rgb(49, 107, 197)',
                      textDecoration: 'underline'
                    }}
                  >
                    health
                  </span>
                  .
                </div>
              </div>
              <div
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IoStorefrontOutline color="gray" size="2rem" />
                <div>
                  Invest in your{' '}
                  <span
                    style={{
                      color: 'rgb(49, 107, 197)',
                      textDecoration: 'underline'
                    }}
                  >
                    health
                  </span>
                  .
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center'
                }}
              >
                <IoStorefrontOutline color="gray" size="2rem" />
                <div>
                  Invest in your{' '}
                  <span
                    style={{
                      color: 'rgb(49, 107, 197)',
                      textDecoration: 'underline'
                    }}
                  >
                    health
                  </span>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
