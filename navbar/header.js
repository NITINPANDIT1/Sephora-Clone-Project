//Function to import export nav data
const header = () => {
    return ` <div id="NAVIGATION">
    <!-- Nav Starting -->
    <nav id="nav">
      <div id="navFirst">
        <div style="color: #fff" id="navText">
        <strong>Get 30% off** ALL Sephora Collection.</strong><strong> SAVENOW.</strong>
        **Terms apply.  <strong>SHOP NOW</strong> ▸
        </div>
        <div id="navImg-con">
          <img
            src="https://www.sephora.com/contentimages/homepage/040423/Homepage/RWD/2023-04-14-sse-bundle-c-site-desktop-global-top-banner-vib-bi-30-off-sc-us-can-slice-1280x1280.jpeg?imwidth=612"
            alt=""
          />
        </div>
      </div>
      <div id="navSecond">
        <div id="navSecondElements">
          <div id="logo" class="flex">
            <a href="./index.html"
              ><img
                src="https://www.sephora.com/img/ufe/logo.svg"
                alt=""
                height="100%"
                width="100%"
            /></a>
          </div>
          <div id="navSearch">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
            <div id="debounceDiv"></div>
          </div>
          <div id="navOptions" class="flex">
            <div id="buttons">
              <div>
                <!-- first -->
                <a href="#" class="flex">
                  <img
                    class="icon"
                    src="https://www.sephora.com/img/ufe/icons/stores.svg"
                    alt=""
                  />
                  <span>
                    <p class="inText">Stores & Services</p>
                    <p>Choose Your Store</p>
                  </span>
                </a>
                <!-- second -->
                <a href="#" class="flex">
                  <img
                    class="icon"
                    src="	https://www.sephora.com/img/ufe/icons/community.svg"
                    alt=""
                  />
                  <span>
                    <p class="inText">Community</p>
                  </span>
                </a>
                <!-- third -->
                <a href="#" class="flex" id="signIn">
                  <img
                    class="icon"
                    src="https://www.sephora.com/img/ufe/icons/me32.svg"
                    alt=""
                  />
                  <span>
                    <p class="inText" id="signinChange">Sign in</p>
                  </span>
  
                  <!-- Sign in starts div here -->
                  <div id="popupSignIn">
                    <div id="hovMainDiv">
                      <div class="btyDIV">
                        <div>
                          <img
                            src="https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/4"
                            id="beauty"
                          />
                        </div>
                        <div id="paraDiv">
                          <p id="bold">Good afternoon, Beautiful. 👋</p>
                          <p id="siginPara">
                            Sign in for a more personalized experience
                          </p>
                        </div>
                      </div>
                      <div class="btnFlx">
                        <button id="signIn-btn">Sign In</button>
                        <button id="createAcc-btn">Create Account</button>
                      </div>
                    </div>
                    <div class="mainListDiv">
                      <div class="firstFlx">
                        <div>
                          <p>Beauty Insider Summary</p>
                          <p>View activity, savings, benefits</p>
                        </div>
                        <div>
                          <img
                            id="logoOFsepgora"
                            src="https://www.sephora.com/img/ufe/bi/logo-bi-stacked.svg"
                          />
                        </div>
                      </div>
                      <div class="secondFlx">
                        <p>Rewards Bazaar</p>
                        <p>Redeem items, samples, more</p>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/subscription.svg"
                          />
                        </div>
                        <div>
                          <p>Buy it Again</p>
                          <p>Reorder from in-store and online purchases</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/track.svg"
                          />
                        </div>
                        <div>
                          <p>Orders</p>
                          <p>View & track online or pickup orders</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/heart.svg"
                          />
                        </div>
                        <div>
                          <p>Loves</p>
                          <p>View saved Products</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/account.svg"
                          />
                        </div>
                        <div>
                          <p>Account Settings</p>
                          <p>Payment, contact info, addresses, password</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                          />
                        </div>
                        <div>
                          <p>Sephora Credit Card Program</p>
                          <p>Apply now</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/flash.svg"
                          />
                        </div>
                        <div>
                          <p>Flash</p>
                          <p>Unlimited 1-2 Day Shipping Subscription</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/reservations.svg"
                          />
                        </div>
                        <div>
                          <p>Reservations</p>
                          <p>Manage your services, classes, events</p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/traits.svg"
                          />
                        </div>
                        <div>
                          <p>Beauty Traits and Color iQ</p>
                          <p>
                            Complete your beauty traits for personalized
                            recommendations
                          </p>
                        </div>
                      </div>
                      <div class="listFlx">
                        <div>
                          <img
                            src="https://www.sephora.com/img/ufe/icons/recommendations.svg"
                          />
                        </div>
                        <div>
                          <p>Beauty Advisor Recommendations</p>
                          <p>Recommendations from your store visits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- sign in div ends here -->
                </a>
              </div>
            </div>
            <div id="icon2">
              <!-- chat -->
              <a href="#" class="iconHover">
                <span>
                  <svg class="css-13o7eu2" fill="none" viewBox="0 0 24 24">
                    <g fill-rule="evenodd">
                      <path
                        d="M11.99 2C6.471 2 2 6.477 2 12s4.472 10 9.99 10a9.936 9.936 0 0 0 5.822-1.874L22 21.25l-1.209-4.517A9.965 9.965 0 0 0 21.98 12"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M11.99 2.5C6.748 2.5 2.5 6.753 2.5 12s4.249 9.5 9.49 9.5c2.064 0 3.973-.66 5.53-1.78a.5.5 0 0 1 .422-.077l3.351.9-.985-3.68a.5.5 0 0 1 .043-.367A9.464 9.464 0 0 0 21.479 12a.5.5 0 0 1 1 0c0 1.726-.417 3.355-1.154 4.793l1.158 4.327a.5.5 0 0 1-.613.613l-3.962-1.063a10.435 10.435 0 0 1-5.919 1.83C6.196 22.5 1.5 17.799 1.5 12c0-5.798 4.696-10.5 10.49-10.5a.5.5 0 1 1 0 1z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 1a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                        fill="currentColor"
                      ></path>
                      <path
                        fill="currentColor"
                        d="m14.692 8.885 6.769-7.193.667.629-6.769 7.192z"
                      ></path>
                    </g>
                  </svg>
                </span>
              </a>
              <!-- whishlist -->
              <a href="./wishlist.html" class="iconHover">
                <span>
                  <!-- <i class="fa-regular fa-heart color"></i> -->
                  <svg
                    viewBox="0 0 24 24"
                    style="width: 2vw"
                    id="wishlistIcon"
                  >
                    <path
                      d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1zm-.7.8c-2.4-2.4-7.2-2-8.9 1.5-.1.3-.4.4-.7.2-.1 0-.2-.1-.2-.2-1.6-3.5-6.5-4-8.9-1.5C.4 5.6.5 10 2.7 12.2c2.2 2.7 7.3 8 9.1 9.4.1.1.2.1.3 0 1.8-1.4 6.9-6.7 9.1-9.5 2.3-2.1 2.4-6.5.1-8.2z"
                    ></path>
                    >
                  </svg>
                </span>
              </a>
              <!-- cart -->
              <a href="./cart.html" class="iconHover" id="cartIcon">
                <span>
                  <!-- <i class="fa-solid fa-basket-shopping color"></i> -->
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-at="search_icon"
                    data-comp="Icon StyledComponent "
                    id="basketIcon"
                  >
                    <path
                      d="M23.498 10c.326 0 .566.28.487.57l-3.078 11.32c-.177.652-.816 1.11-1.55 1.11H4.643c-.733 0-1.371-.458-1.55-1.11L.015 10.57c-.079-.29.16-.57.487-.57h22.996zm-3.112 9.999H3.613l.453 1.668a.588.588 0 0 0 .576.414h14.716c.271 0 .509-.17.575-.414L20.386 20zm.815-3H2.797l.544 2h17.317l.543-2zm.816-3H1.981l.544 2h18.948l.544-2zm.839-3.08H1.144L1.71 13h20.579l.567-2.08zm-9.037-9.205l5.612 5.2a.5.5 0 1 1-.68.734l-5.612-5.2a1.674 1.674 0 0 0-2.278 0l-5.612 5.2a.5.5 0 1 1-.68-.734l5.612-5.2a2.674 2.674 0 0 1 3.638 0z"
                    ></path>
                    >
                  </svg>
                </span>
                <p id="cartCount"></p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="navThird">
        <ul id="navThirdList">
          <!-- Items -->
          <li class="nav-item">
            <a href="./newpage.html">New</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- Sub-Items -->
  
            <div class="sub-items cat1">
              <div class="sub-list">
                <ul>
                  <li><a href="#" id="a">All New</a></li>
                  <li><a href="#">Just Dropped</a></li>
                  <li><a href="#">New Makeup</a></li>
                  <li><a href="#">New Skincare</a></li>
                  <li><a href="#">New Haircare</a></li>
                  <li><a href="#">New Fragrance</a></li>
                  <li><a href="#">New Bath & Body</a></li>
                  <li><a href="#">New Tools & Brushes</a></li>
                </ul>
  
                <ul>
                  <li><a href="#">The Next Big Thing</a></li>
                  <li><a href="#">Bestsellers</a></li>
                  <li><a href="#">Allure Best Of Beauty</a></li>
                  <li><a href="#">Quizzes & Buying Guides</a></li>
                  <li><a href="#">Clean Beauty Guide</a></li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2022-feb-lip-story-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                  alt=""
                />
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2022-02-01-feb-hair-mbc-site-desktop-global-navigation-button.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="./brand.html">Brands</a>
            <!-- sub-items -->
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>Brands A-Z</strong></a>
                  </li>
                  <li>
                    <a href="#"
                      ><strong><u>SEPHORA COLLECTION</u></strong></a
                    >
                  </li>
                  <li>
                    <a href="#"><strong>New Brands</strong></a>
                  </li>
                  <li><a href="#">Dame Products</a></li>
                  <li><a href="#">RANAVAT</a></li>
                  <li><a href="#">GXVE Beauty</a></li>
                  <li><a href="#">Chris Collins</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Only At Sephora</strong></a>
                  </li>
                  <li><a href="#">Tatcha</a></li>
                  <li><a href="#">Dr.Dennis Gross Skincare</a></li>
                  <li><a href="#">The 7 Virtues</a></li>
                  <li><a href="#">HUDA BEUTY</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Affordable Brands</strong></a>
                  </li>
                  <li><a href="#">SEPHORA COLLECTOINS</a></li>
                  <li><a href="#">The Ordinary</a></li>
                  <li><a href="#">The Inkey List</a></li>
                  <li><a href="#">Verb</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Black-Owned Brands</strong></a>
                  </li>
                  <li><a href="#">adwoa beuty</a></li>
                  <li><a href="#">PATTERN by Tracee Ellis</a></li>
                  <li><a href="#">Briogeo</a></li>
                  <li><a href="#">Shani Darden Skin Care</a></li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="./makeup.html">Makeup</a>
  
            <!-- sub-items -->
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><br /></a>
                  </li>
                  <li>
                    <a href="#"><strong>Face</strong></a>
                  </li>
                  <li><a href="#">Foundation</a></li>
                  <li><a href="#">BB & CC Creams</a></li>
                  <li><a href="#">Tinted Mosturizer</a></li>
                  <li><a href="#">Concealer</a></li>
                  <li><a href="#">Face Primer</a></li>
                  <li><a href="#">Setting spray & Powdwr</a></li>
                  <li><a href="#">Hifhlighter</a></li>
                  <li><a href="#">Contour</a></li>
                  <li><a href="#">Color Correct</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Eye</strong></a>
                  </li>
                  <li><a href="#">Mascara</a></li>
                  <li><a href="#">Eye Palettes</a></li>
                  <li><a href="#">Eyeliner</a></li>
                  <li><a href="#">Eyebrow</a></li>
                  <li><a href="#">False Eyelashes</a></li>
                  <li><a href="#">Eyelash Serums</a></li>
                  <li><a href="#">Eye Primer</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Lip</strong></a>
                  </li>
                  <li><a href="#">Lipstic</a></li>
                  <li><a href="#">Lip Gloss</a></li>
                  <li><a href="#">Lip Stain</a></li>
                  <li><a href="#">Lip Liner</a></li>
                  <li><a href="#">Lip Plumber</a></li>
                  <li><a href="#">Lip Sets</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Cheek</strong></a>
                  </li>
                  <li><a href="#">Blush</a></li>
                  <li><a href="#">Bronzer</a></li>
                  <li><a href="#">Cheek Palettes</a></li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Accessorises</a></li>
                  <li><a href="#">Nails</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Cheek</strong></a>
                  </li>
                  <li><a href="#">Blush</a></li>
                  <li><a href="#">Bronzer</a></li>
                  <li><a href="#">Cheek Palettes</a></li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Accessorises</a></li>
                  <li><a href="#">Nails</a></li>
                </ul>
                <ul>
                  <li>
                    <a href="#"><strong>New</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Bestsellers</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Clean Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Vegan Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Mini Size</strong></a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#"><strong>Help Me Choose</strong></a>
                  </li>
                  <li><a href="#">Foundation Quiz</a></li>
                  <li><a href="#">Lip Quiz</a></li>
                  <li><a href="#">Brow Quiz</a></li>
                  <li>
                    <a href="#">Complexion Routine Builder</a>
                  </li>
                  <li>
                    <a href="#">Guide to Foundations</a>
                  </li>
                  <li><a href="#">Clean Makeup Guide</a></li>
                  <li><a href="#">No Makeup Makeup</a></li>
                </ul>
              </div>
              <!-- <div class="sub-img">
              <img
                src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                alt=""
              />
            </div> -->
            </div>
          </li>
  
          <li class="nav-item">
            <a href="./skincare.html">Skincare</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Skincare</strong></a>
                  </li>
                  <li>
                    <a href="#"><br /></a>
                  </li>
                  <li>
                    <a href="#"><strong>Moisturizers</strong></a>
                  </li>
                  <li><a href="#">Night Creams</a></li>
                  <li><a href="#">Face Oils</a></li>
                  <li><a href="#">Mists & Essences</a></li>
                  <li><a href="#">BB & CC Creams</a></li>
                  <li><a href="#">Face Wash & Cleanser</a></li>
                  <li><a href="#">Exfoliators</a></li>
                  <li><a href="#">Makeup Removers</a></li>
                  <li><a href="#">Toners</a></li>
                  <li><a href="#">Face Wipes</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Treatments</strong></a>
                  </li>
                  <li><a href="#">Face Serums</a></li>
                  <li><a href="#">Treatments</a></li>
                  <li><a href="#">Eyeliner</a></li>
                  <li><a href="#">Eyebrow</a></li>
                  <li><a href="#">Facial Peelsty</a></li>
                  <li>
                    <a href="#"><strong>Masks</strong></a>
                  </li>
                  <li><a href="#">Face Masks</a></li>
                  <li><a href="#">Sheet Masks</a></li>
                  <li><a href="#">Eye Masks</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Sunscreen</strong></a>
                  </li>
                  <li><a href="#">Face Sunscreen</a></li>
                  <li><a href="#">Body Sunscreen</a></li>
                  <li>
                    <a href="#"><strong>High Tech Tools</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Wellness</strong></a>
                  </li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Shop by Concern</strong></a>
                  </li>
                  <li><a href="#">Acne & Blemishes</a></li>
                  <li><a href="#">Anti-Aging</a></li>
                  <li><a href="#">Dark Spots</a></li>
                  <li>
                    <a href="#"><strong>Pores </strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Dryness</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Fine Lines & Wrinkles</a></li>
                  <li><a href="#">Duliness</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>New</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Bestsellers</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Clean Skincare</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Vegan Skincare</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Mini Size</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Sephora Collection</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Luxury Skincare</strong></a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#"><strong>Help Me Choose</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare Quiz</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare Ingredients</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Best Skincare Under $35</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare by Age</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare for Your Skin</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Allure Best of Beauty</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare</strong></a>
                  </li>
                </ul>
              </div>
              <!-- <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                  alt=""
                />
              </div> -->
            </div>
          </li>
          <li class="nav-item">
            <a href="./hair.html">Hair</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- sub-items -->
  
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><br /></a>
                  </li>
                  <li>
                    <a href="#"><strong>Face</strong></a>
                  </li>
                  <li><a href="#">Foundation</a></li>
                  <li><a href="#">BB & CC Creams</a></li>
                  <li><a href="#">Tinted Mosturizer</a></li>
                  <li><a href="#">Concealer</a></li>
                  <li><a href="#">Face Primer</a></li>
                  <li><a href="#">Setting spray & Powdwr</a></li>
                  <li><a href="#">Hifhlighter</a></li>
                  <li><a href="#">Contour</a></li>
                  <li><a href="#">Color Correct</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Eye</strong></a>
                  </li>
                  <li><a href="#">Mascara</a></li>
                  <li><a href="#">Eye Palettes</a></li>
                  <li><a href="#">Eyeliner</a></li>
                  <li><a href="#">Eyebrow</a></li>
                  <li><a href="#">False Eyelashes</a></li>
                  <li><a href="#">Eyelash Serums</a></li>
                  <li><a href="#">Eye Primer</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Lip</strong></a>
                  </li>
                  <li><a href="#">Lipstic</a></li>
                  <li><a href="#">Lip Gloss</a></li>
                  <li><a href="#">Lip Stain</a></li>
                  <li><a href="#">Lip Liner</a></li>
                  <li><a href="#">Lip Plumber</a></li>
                  <li><a href="#">Lip Sets</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Cheek</strong></a>
                  </li>
                  <li><a href="#">Blush</a></li>
                  <li><a href="#">Bronzer</a></li>
                  <li><a href="#">Cheek Palettes</a></li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Accessorises</a></li>
                  <li><a href="#">Nails</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Cheek</strong></a>
                  </li>
                  <li><a href="#">Blush</a></li>
                  <li><a href="#">Bronzer</a></li>
                  <li><a href="#">Cheek Palettes</a></li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Accessorises</a></li>
                  <li><a href="#">Nails</a></li>
                </ul>
                <ul>
                  <li>
                    <a href="#"><strong>New</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Bestsellers</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Clean Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Vegan Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Mini Size</strong></a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#"><strong>Help Me Choose</strong></a>
                  </li>
                  <li><a href="#">Foundation Quiz</a></li>
                  <li><a href="#">Lip Quiz</a></li>
                  <li><a href="#">Brow Quiz</a></li>
                  <li>
                    <a href="#">Complexion Routine Builder</a>
                  </li>
                  <li>
                    <a href="#">Guide to Foundations</a>
                  </li>
                  <li><a href="#">Clean Makeup Guide</a></li>
                  <li><a href="#">No Makeup Makeup</a></li>
                </ul>
              </div>
              <!-- <div class="sub-img">
            <img
              src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
              alt=""
            />
          </div> -->
            </div>
          </li>
          <li class="nav-item">
            <a href="./fragrance.html">Fragrance</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- sub-items -->
  
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Fragrance</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Woman</strong></a>
                  </li>
                  <li>
                    <a href="#">Perfume</a>
                  </li>
                  <li><a href="#">Perfume Oils</a></li>
                  <li><a href="#">RANAVAT</a></li>
                  <li>
                    <a href="./men.html"><strong>Men</strong></a>
                  </li>
                  <li><a href="#">Chris Collins</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Only At Sephora</strong></a>
                  </li>
                  <li><a href="#">Tatcha</a></li>
                  <li><a href="#">Dr.Dennis Gross Skincare</a></li>
                  <li><a href="#">The 7 Virtues</a></li>
                  <li><a href="#">HUDA BEUTY</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Affordable Brands</strong></a>
                  </li>
                  <li><a href="#">SEPHORA COLLECTOINS</a></li>
                  <li><a href="#">The Ordinary</a></li>
                  <li><a href="#">The Inkey List</a></li>
                  <li><a href="#">Verb</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Black-Owned Brands</strong></a>
                  </li>
                  <li><a href="#">adwoa beuty</a></li>
                  <li><a href="#">PATTERN by Tracee Ellis</a></li>
                  <li><a href="#">Briogeo</a></li>
                  <li><a href="#">Shani Darden Skin Care</a></li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2022-3-1-BlackOwnedBrands-site-desktop-global-navigation-button-us.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="./toolsandbrushes.html">Tools & Brush</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- sub Items -->
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><br /></a>
                  </li>
                  <li>
                    <a href="#"><strong>Face</strong></a>
                  </li>
                  <li><a href="#">Foundation</a></li>
                  <li><a href="#">BB & CC Creams</a></li>
                  <li><a href="#">Tinted Mosturizer</a></li>
                  <li><a href="#">Concealer</a></li>
                  <li><a href="#">Face Primer</a></li>
                  <li><a href="#">Setting spray & Powdwr</a></li>
                  <li><a href="#">Hifhlighter</a></li>
                  <li><a href="#">Contour</a></li>
                  <li><a href="#">Color Correct</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Eye</strong></a>
                  </li>
                  <li><a href="#">Mascara</a></li>
                  <li><a href="#">Eye Palettes</a></li>
                  <li><a href="#">Eyeliner</a></li>
                  <li><a href="#">Eyebrow</a></li>
                  <li><a href="#">False Eyelashes</a></li>
                  <li><a href="#">Eyelash Serums</a></li>
                  <li><a href="#">Eye Primer</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Lip</strong></a>
                  </li>
                  <li><a href="#">Lipstic</a></li>
                  <li><a href="#">Lip Gloss</a></li>
                  <li><a href="#">Lip Stain</a></li>
                  <li><a href="#">Lip Liner</a></li>
                  <li><a href="#">Lip Plumber</a></li>
                  <li><a href="#">Lip Sets</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Cheek</strong></a>
                  </li>
                  <li><a href="#">Blush</a></li>
                  <li><a href="#">Bronzer</a></li>
                  <li><a href="#">Cheek Palettes</a></li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Accessorises</a></li>
                  <li><a href="#">Nails</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Cheek</strong></a>
                  </li>
                  <li><a href="#">Blush</a></li>
                  <li><a href="#">Bronzer</a></li>
                  <li><a href="#">Cheek Palettes</a></li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                  <li><a href="#">Brushes & Applications</a></li>
                  <li><a href="#">Accessorises</a></li>
                  <li><a href="#">Nails</a></li>
                </ul>
                <ul>
                  <li>
                    <a href="#"><strong>New</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Bestsellers</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Clean Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Vegan Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Mini Size</strong></a>
                  </li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-pro-brushes-site-desktop-global-navigation-button.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#">Bath & Body</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- subItems -->
            <div class="sub-items cat1">
              <div class="sub-list">
                <ul>
                  <li><a href="#" id="a">All New</a></li>
                  <li><a href="#">Just Dropped</a></li>
                  <li><a href="#">New Makeup</a></li>
                  <li><a href="#">New Skincare</a></li>
                  <li><a href="#">New Haircare</a></li>
                  <li><a href="#">New Fragrance</a></li>
                  <li><a href="#">New Bath & Body</a></li>
                  <li><a href="#">New Tools & Brushes</a></li>
                </ul>
  
                <ul>
                  <li><a href="#">The Next Big Thing</a></li>
                  <li><a href="#">Bestsellers</a></li>
                  <li><a href="#">Allure Best Of Beauty</a></li>
                  <li><a href="#">Quizzes & Buying Guides</a></li>
                  <li><a href="#">Clean Beauty Guide</a></li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2020-9-14-site-desktop-global-navigation-button-banner-sol-de-janeiro.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#">Mini Size</a>
  
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- subItems -->
            <div class="sub-items cat1">
              <div class="sub-list">
                <ul>
                  <li><a href="#" id="a">All New</a></li>
                  <li><a href="#">Just Dropped</a></li>
                  <li><a href="#">New Makeup</a></li>
                  <li><a href="#">New Skincare</a></li>
                  <li><a href="#">New Haircare</a></li>
                  <li><a href="#">New Fragrance</a></li>
                  <li><a href="#">New Bath & Body</a></li>
                  <li><a href="#">New Tools & Brushes</a></li>
                </ul>
  
                <ul>
                  <li><a href="#">The Next Big Thing</a></li>
                  <li><a href="#">Bestsellers</a></li>
                  <li><a href="#">Allure Best Of Beauty</a></li>
                  <li><a href="#">Quizzes & Buying Guides</a></li>
                  <li><a href="#">Clean Beauty Guide</a></li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2020-07-29-site-global-navigation-button-evergreen-crossworld-minis.jpg?imwidth=294"
                  alt=""
                />
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2020-12-23-site-dt-botnav-seph-coll-US.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#">Gifts</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- sub-items -->
  
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Gifts</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Gift Cards</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Value & Gift Sets</strong></a>
                  </li>
                  <li>
                    <a href="#"><br /></a>
                  </li>
                  <li>
                    <a href="#"><strong>By Price</strong></a>
                  </li>
                  <li><a href="#">$10 and under</a></li>
                  <li><a href="#">$15 and under</a></li>
                  <li><a href="#">$25 and under</a></li>
                  <li><a href="#">$50 and under</a></li>
                  <li><a href="#">$70 and under</a></li>
                  <li><a href="#">$100 and under</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>By Category</strong></a>
                  </li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare </a></li>
                  <li><a href="#"> Hair </a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a href="#">Candles & Home Scents</a></li>
                  <li><a href="#">Tools</a></li>
                  <li><a href="#">Brush Sets & Accessories</a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>By Recipient</strong></a>
                  </li>
                  <li><a href="#">For Her</a></li>
                  <li><a href="#">For Him</a></li>
                  <li><a href="#">For Teenagers</a></li>
                  <li><a href="#">For Them </a></li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Top Rated Gifts</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Mini Size</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong></strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Only at Sephora</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Luxury</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup Palettes</strong></a>
                  </li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-gift-card.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#">Beauty Under $20</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- sub-items -->
  
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>Makeup Under $20</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare Under $20</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Hair Under $20</strong></a>
                  </li>
  
                  <li>
                    <a href="#"><strong>Fragrance Under $20</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Tools & Brushes Under $20</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Bath & Body Under $20</strong></a>
                  </li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"
                      ><strong>Sephora Collection Under s20</strong></a
                    >
                  </li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare </a></li>
                  <li><a href="#"> Hair </a></li>
                  <li><a href="#">Candles & Home Scents</a></li>
                  <li><a href="#">Tools & Brushes</a></li>
                  <li><a href="#">Value & Gift Sets</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/2022-01-13-sc-bbd-mascara-site-desktop-global-navigation-button.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a href="#">Sale & Offers</a>
            <span class="liIcon"><i class="fa-solid fa-caret-up"></i></span>
            <!-- sub-items -->
  
            <div class="sub-items">
              <div class="sub-list">
                <ul>
                  <li>
                    <a href="#" id="a"><strong>All Sale</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Makeup</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Skincare</strong></a>
                  </li>
  
                  <li>
                    <a href="#"><strong>Haircare</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Tools & Brushes</strong></a>
                  </li>
                  <li>
                    <a href="#"><strong>Bath & Body</strong></a>
                  </li>
                </ul>
  
                <ul>
                  <li>
                    <a href="#"><strong>Beauty Offers </strong></a>
                  </li>
                </ul>
              </div>
              <div class="sub-img">
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/slotting-sale-generic-site-desktop-global-navigation-button_copy-only.jpg?imwidth=294"
                  alt=""
                />
                <img
                  src="https://www.sephora.com/contentimages/meganav/large/site-desktop-global-navigation-button-evergreen-beauty-offers-abundance.jpg?imwidth=294"
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Nav Ends -->
    <!-- Create acc starting -->
  
    <div id="popUp" class="modal-2">
      <div class="modal-content-2 animate">
        <div class="containerAc">
          <div id="clsRight1">
            <div></div>
            <div class="formHead">Create an Account</div>
            <div id="cac-close" class="close" title="Close Modal">X</div>
          </div>
          <div id="hr1"></div>
          <div id="sepImg">
            <img
              src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
            />
          </div>
          <div id="descOfCA">
            Join the Beauty Insider loyalty program. Earn points, redeem
            rewards, and more.
          </div>
  
          <div id="nameFlx">
            <input type="text" id="fname" placeholder="First name" />
            <input type="text" id="lname" placeholder="Last name" />
          </div>
          <div
            style="
              display: flex;
              font-size: 10px;
              justify-content: space-between;
            "
          >
            <div id="err1"></div>
            <div id="err2"></div>
          </div>
  
          <div>
            <input type="email" id="c_email" placeholder="Email address" />
          </div>
  
          <div>
            <input
              type="password"
              id="c_password"
              placeholder="Password (6 tot 12 Characters)"
            />
            <!-- <i class="bi bi-eye-slash" id="togglePassword"></i>  -->
          </div>
          <div>
            <input
              type="text"
              id="phone"
              placeholder="Phone number (optional)"
            />
            <i class="bi bi-exclamation-circle" id="err_circle"></i>
          </div>
  
          <div id="img-icon-flx">
            <div>
              <img
                src="https://www.sephora.com/img/ufe/icons/birthday.svg"
                id="img-icon"
              />
            </div>
            <div>Enter your birthdate to receive a free gift every year.</div>
          </div>
  
          <div id="selectFlx">
            <select name="Month">
              <option value="Month">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select name="day" class="scroll-auto">
              <option value="Day">Day</option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
              <option value="06">6</option>
              <option value="07">7</option>
              <option value="08">8</option>
              <option value="09">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
  
          <div>
            <input
              type="text"
              id="zip"
              placeholder="ZIP Code (to hear about store events near you)"
            />
          </div>
  
          <div id="formRight1">
            <div id="chkflex1">
              <div>
                <input type="checkbox" id="remember-me" class="check1" />
              </div>
              <div>Keep me signed In</div>
              <i class="bi bi-exclamation-circle"></i>
            </div>
          </div>
  
          <button type="submit" id="join-btn">Join Now</button>
          <div id="hr1"></div>
  
          <div class="endAgg">
            By clicking “Join Now” you acknowledge that you are a U.S. or
            Canada resident and (1) have read Sephora’s
            <a class="anch_class">Privacy Policy</a> and
            <a class="anch_class">Notice of Financial Incentive</a>, (2),
            agree to <a class="anch_class">Terms of Use</a>,
            <a class="anch_class">Beauty Insider Terms</a>, and to
            automatically receive Beauty Insider offers and notifications via
            email.
          </div>
  
          <div class="endAgg">
            Sephora uses Google ReCaptcha and by registering, users are
            subject to Google’s
            <a class="anch_class">privacy policy</a> &
            <a class="anch_class">terms</a>.
          </div>
        </div>
      </div>
      <!-- create a/c end -->
    </div>
  
    <!-- create a/c End-->`;
  };
  

export { header };
  