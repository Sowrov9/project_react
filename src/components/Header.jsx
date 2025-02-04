import React from 'react'

const Header = () => {
    return (
        <>
            <div className="nav-header">
                <a href="index.html" className="brand-logo">
                    <svg className="logo-abbr" width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="rect-primary-rect" d="M0 20C0 8.95431 8.95431 0 20 0H36C47.0457 0 56 8.95431 56 20V36C56 47.0457 47.0457 56 36 56H20C8.95431 56 0 47.0457 0 36V20Z" fill="url(#paint0_linear)" />
                        <path d="M17 26.5L18 37.5L37.5 37.5L38.5 26.5C41.1667 26.6667 46.3 25.4 45.5 19C44.7 12.6 39.1667 12 36.5 12.5C35 11.3334 32.5 7.5 27 8.00004C22.9375 8.36939 20 10.6667 19 12.5C16.5 12.1667 11.3 12.9 10.5 18.5C9.69997 24.1 14.5 26.1667 17 26.5Z" stroke="white" strokeWidth={2} />
                        <line x1="21.1837" y1="30.9641" x2="21.8108" y2="36.9312" stroke="white" />
                        <line x1="34.339" y1="31.0342" x2="33.6547" y2="37.0784" stroke="white" />
                        <line x1="27.5" y1={30} x2="27.5" y2={37} stroke="white" />
                        <path d="M18.5 50C15.2975 50.01 13.3333 46.8334 12 45C12 45 15.3959 48.5673 17.5 47.5C18.8153 46.8328 19 45.5 19.5 45L20.5 44C21.2139 43.2861 22.5 43 22.5 43C22.5 43 24.2179 42.7032 25.25 43C26.5262 43.367 28 45 28 45C28 45 29.2775 43.262 30.5 43C31.0728 42.8773 32 43 32 43C32 43 33.2379 43.2406 34 43.5C34.7039 43.7396 35.1149 43.8634 35.75 44.25C36.8115 44.8961 36.8667 45.9903 38 46.5C40.0304 47.4133 43.5 45 43.5 45C43.5 45 41.8662 48.0913 40 49C37.3434 50.2937 35 50 32.5 48C30 46 28.5 46.5 27.5 47C27.5 47 24.5 46.5 22 49C21.5 49.5 19.9215 49.9956 18.5 50Z" fill="white" stroke="white" strokeWidth="0.1" />
                        <defs>
                            <linearGradient id="paint0_linear" x1={28} y1={0} x2={28} y2={56} gradientUnits="userSpaceOnUse">
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="brand-title" width={165} height={35} viewBox="0 0 165 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="svg-title-path" d="M10.912 34C8.832 34 7.008 33.536 5.44 32.608C3.872 31.68 2.656 30.448 1.792 28.912C0.928 27.376 0.496 25.68 0.496 23.824V0.399998H8.56V24.4C8.56 25.168 8.832 25.84 9.376 26.416C9.92 26.992 10.592 27.28 11.392 27.28H20.272V34H10.912ZM36.8511 34C34.0671 34 31.6191 33.488 29.5071 32.464C27.3951 31.408 25.7471 29.968 24.5631 28.144C23.4111 26.288 22.8351 24.144 22.8351 21.712C22.8351 19.024 23.3951 16.72 24.5151 14.8C25.6351 12.88 27.1231 11.408 28.9791 10.384C30.8671 9.328 32.9471 8.8 35.2191 8.8C37.8111 8.8 39.9711 9.344 41.6991 10.432C43.4591 11.52 44.7871 13.008 45.6831 14.896C46.5791 16.784 47.0271 18.912 47.0271 21.28C47.0271 21.728 46.9951 22.224 46.9311 22.768C46.8991 23.312 46.8511 23.744 46.7871 24.064H30.6591C30.9471 25.344 31.6191 26.304 32.6751 26.944C33.7311 27.552 35.0431 27.856 36.6111 27.856H44.1471V34H36.8511ZM30.4671 19.408H39.8271C39.7311 18.064 39.2991 16.96 38.5311 16.096C37.7631 15.232 36.6591 14.8 35.2191 14.8C33.7151 14.8 32.5791 15.28 31.8111 16.24C31.0751 17.168 30.6271 18.224 30.4671 19.408ZM56.6901 34C54.6741 34 53.0741 33.376 51.8901 32.128C50.7061 30.88 50.1141 29.408 50.1141 27.712C50.1141 26.592 50.3861 25.6 50.9301 24.736C51.5061 23.872 52.2741 23.136 53.2341 22.528L62.0181 16.672C62.3061 16.512 62.4501 16.32 62.4501 16.096C62.4501 15.712 62.2261 15.52 61.7781 15.52H51.2181L51.1701 9.376H64.3701C65.6181 9.376 66.7221 9.68 67.6821 10.288C68.6741 10.864 69.4421 11.632 69.9861 12.592C70.5301 13.552 70.8021 14.592 70.8021 15.712C70.8021 16.768 70.5301 17.76 69.9861 18.688C69.4741 19.584 68.7701 20.336 67.8741 20.944L59.0901 26.704C58.8341 26.896 58.7061 27.088 58.7061 27.28C58.7061 27.664 58.9301 27.856 59.3781 27.856H70.3221V34H56.6901ZM85.4845 34.576C83.2765 34.576 81.3405 34.016 79.6765 32.896C78.0445 31.776 76.7645 30.272 75.8365 28.384C74.9085 26.464 74.4445 24.304 74.4445 21.904C74.4445 19.408 74.9725 17.184 76.0285 15.232C77.1165 13.248 78.6525 11.68 80.6365 10.528C82.6525 9.376 85.0365 8.8 87.7885 8.8C90.5405 8.8 92.8765 9.376 94.7965 10.528C96.7485 11.68 98.2365 13.232 99.2605 15.184C100.317 17.136 100.845 19.328 100.845 21.76V34H93.5485V30.064H93.3565C92.6525 31.344 91.6765 32.416 90.4285 33.28C89.1805 34.144 87.5325 34.576 85.4845 34.576ZM87.6925 28.144C89.3885 28.144 90.7325 27.536 91.7245 26.32C92.7485 25.072 93.2605 23.52 93.2605 21.664C93.2605 19.904 92.7485 18.416 91.7245 17.2C90.7325 15.952 89.3885 15.328 87.6925 15.328C85.9325 15.328 84.5405 15.952 83.5165 17.2C82.5245 18.416 82.0285 19.904 82.0285 21.664C82.0285 23.488 82.5245 25.024 83.5165 26.272C84.5405 27.52 85.9325 28.144 87.6925 28.144Z" fill="#FD683E" />
                        <path d="M115.371 34C113.099 34 111.323 33.36 110.043 32.08C108.763 30.8 108.123 29.04 108.123 26.8V15.472H104.091V9.376H108.123V3.376H115.611V9.376H122.379V15.472H115.611V26.368C115.611 26.784 115.739 27.12 115.995 27.376C116.251 27.632 116.587 27.76 117.003 27.76H122.379V34H115.371ZM138.273 34.576C135.745 34.576 133.473 34.016 131.457 32.896C129.441 31.776 127.841 30.256 126.657 28.336C125.505 26.384 124.929 24.176 124.929 21.712C124.929 19.248 125.505 17.056 126.657 15.136C127.841 13.184 129.441 11.648 131.457 10.528C133.473 9.376 135.745 8.8 138.273 8.8C140.801 8.8 143.057 9.376 145.041 10.528C147.057 11.648 148.641 13.184 149.793 15.136C150.977 17.056 151.569 19.248 151.569 21.712C151.569 24.176 150.977 26.384 149.793 28.336C148.641 30.256 147.057 31.776 145.041 32.896C143.025 34.016 140.769 34.576 138.273 34.576ZM138.273 28.096C140.033 28.096 141.441 27.488 142.497 26.272C143.553 25.024 144.081 23.488 144.081 21.664C144.081 19.872 143.553 18.368 142.497 17.152C141.441 15.904 140.033 15.28 138.273 15.28C136.481 15.28 135.057 15.904 134.001 17.152C132.945 18.368 132.417 19.872 132.417 21.664C132.417 23.488 132.945 25.024 134.001 26.272C135.057 27.488 136.481 28.096 138.273 28.096ZM159.635 34.576C158.355 34.576 157.251 34.128 156.323 33.232C155.427 32.304 154.979 31.216 154.979 29.968C154.979 28.688 155.427 27.6 156.323 26.704C157.251 25.776 158.355 25.312 159.635 25.312C160.883 25.312 161.955 25.776 162.851 26.704C163.779 27.6 164.243 28.688 164.243 29.968C164.243 31.216 163.779 32.304 162.851 33.232C161.955 34.128 160.883 34.576 159.635 34.576Z" fill="#202020" />
                    </svg>
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line" /><span className="line" /><span className="line" />
                    </div>
                </div>
            </div>


        <div className="chatbox">
  <div className="chatbox-close" />
  <div className="custom-tab-1">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" href="#notes">Notes</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-bs-toggle="tab" href="#alerts">Alerts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" data-bs-toggle="tab" href="#chat">Chat</a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane fade active show" id="chat" role="tabpanel">
        <div className="card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box">
          <div className="card-header chat-list-header text-center">
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
            <div>
              <h6 className="mb-1">Chat List</h6>
              <p className="mb-0">Show All</p>
            </div>
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
          </div>
          <div className="card-body contacts_body p-0 dz-scroll  " id="DZ_W_Contacts_Body">
            <ul className="contacts">
              <li className="name-first-letter">A</li>
              <li className="active dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>Archie Parker</span>
                    <p>Kalid is online</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Alfie Mason</span>
                    <p>Taherah left 7 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>AharlieKane</span>
                    <p>Sami is online</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Athan Jacoby</span>
                    <p>Nargis left 30 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="name-first-letter">B</li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Bashid Samim</span>
                    <p>Rashid left 50 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>Breddie Ronan</span>
                    <p>Kalid is online</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Ceorge Carson</span>
                    <p>Taherah left 7 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="name-first-letter">D</li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>Darry Parker</span>
                    <p>Sami is online</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Denry Hunter</span>
                    <p>Nargis left 30 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="name-first-letter">J</li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Jack Ronan</span>
                    <p>Rashid left 50 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/1.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>Jacob Tucker</span>
                    <p>Kalid is online</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/2.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>James Logan</span>
                    <p>Taherah left 7 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/3.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon" />
                  </div>
                  <div className="user_info">
                    <span>Joshua Weston</span>
                    <p>Sami is online</p>
                  </div>
                </div>
              </li>
              <li className="name-first-letter">O</li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/4.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Oliver Acker</span>
                    <p>Nargis left 30 mins ago</p>
                  </div>
                </div>
              </li>
              <li className="dz-chat-user">
                <div className="d-flex bd-highlight">
                  <div className="img_cont">
                    <img src="images/avatar/5.jpg" className="rounded-circle user_img" alt />
                    <span className="online_icon offline" />
                  </div>
                  <div className="user_info">
                    <span>Oscar Weston</span>
                    <p>Rashid left 50 mins ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="card chat dz-chat-history-box d-none">
          <div className="card-header chat-list-header text-center">
            <a href="javascript:void(0);" className="dz-chat-history-back">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24" /><rect fill="#000000" opacity="0.3" transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) " x={14} y={7} width={2} height={10} rx={1} /><path d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z" fill="#000000" fillRule="nonzero" transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) " /></g></svg>
            </a>
            <div>
              <h6 className="mb-1">Chat with Khelesh</h6>
              <p className="mb-0 text-success">Online</p>
            </div>							
            <div className="dropdown">
              <a href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2" /> View profile</li>
                <li className="dropdown-item"><i className="fa fa-users text-primary me-2" /> Add to btn-close friends</li>
                <li className="dropdown-item"><i className="fa fa-plus text-primary me-2" /> Add to group</li>
                <li className="dropdown-item"><i className="fa fa-ban text-primary me-2" /> Block</li>
              </ul>
            </div>
          </div>
          <div className="card-body msg_card_body dz-scroll" id="DZ_W_Contacts_Body3">
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                Hi, how are you samim?
                <span className="msg_time">8:40 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                Hi Khalid i am good tnx how about you?
                <span className="msg_time_send">8:55 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                I am good too, thank you for your chat template
                <span className="msg_time">9:00 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                You are welcome
                <span className="msg_time_send">9:05 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                I am looking for your next templates
                <span className="msg_time">9:07 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                Ok, thank you have a good day
                <span className="msg_time_send">9:10 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                Bye, see you
                <span className="msg_time">9:12 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                Hi, how are you samim?
                <span className="msg_time">8:40 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                Hi Khalid i am good tnx how about you?
                <span className="msg_time_send">8:55 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                I am good too, thank you for your chat template
                <span className="msg_time">9:00 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                You are welcome
                <span className="msg_time_send">9:05 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                I am looking for your next templates
                <span className="msg_time">9:07 AM, Today</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mb-4">
              <div className="msg_cotainer_send">
                Ok, thank you have a good day
                <span className="msg_time_send">9:10 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img src="images/avatar/2.jpg" className="rounded-circle user_img_msg" alt />
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4">
              <div className="img_cont_msg">
                <img src="images/avatar/1.jpg" className="rounded-circle user_img_msg" alt />
              </div>
              <div className="msg_cotainer">
                Bye, see you
                <span className="msg_time">9:12 AM, Today</span>
              </div>
            </div>
          </div>
          <div className="card-footer type_msg">
            <div className="input-group">
              <textarea className="form-control" placeholder="Type your message..." defaultValue={""} />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary"><i className="fa fa-location-arrow" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="alerts" role="tabpanel">
        <div className="card mb-sm-3 mb-md-0 contacts_card">
          <div className="card-header chat-list-header text-center">
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><circle fill="#000000" cx={5} cy={12} r={2} /><circle fill="#000000" cx={12} cy={12} r={2} /><circle fill="#000000" cx={19} cy={12} r={2} /></g></svg></a>
            <div>
              <h6 className="mb-1">Notications</h6>
              <p className="mb-0">Show All</p>
            </div>
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
          </div>
          <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body1">
            <ul className="contacts">
              <li className="name-first-letter">SEVER STATUS</li>
              <li className="active">
                <div className="d-flex bd-highlight">
                  <div className="img_cont primary">KK</div>
                  <div className="user_info">
                    <span>David Nester Birthday</span>
                    <p className="text-primary">Today</p>
                  </div>
                </div>
              </li>
              <li className="name-first-letter">SOCIAL</li>
              <li>
                <div className="d-flex bd-highlight">
                  <div className="img_cont success">RU</div>
                  <div className="user_info">
                    <span>Perfection Simplified</span>
                    <p>Jame Smith commented on your status</p>
                  </div>
                </div>
              </li>
              <li className="name-first-letter">SEVER STATUS</li>
              <li>
                <div className="d-flex bd-highlight">
                  <div className="img_cont primary">AU</div>
                  <div className="user_info">
                    <span>AharlieKane</span>
                    <p>Sami is online</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex bd-highlight">
                  <div className="img_cont info">MO</div>
                  <div className="user_info">
                    <span>Athan Jacoby</span>
                    <p>Nargis left 30 mins ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="card-footer" />
        </div>
      </div>
      <div className="tab-pane fade" id="notes">
        <div className="card mb-sm-3 mb-md-0 note_card">
          <div className="card-header chat-list-header text-center">
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect fill="#000000" x={4} y={11} width={16} height={2} rx={1} /><rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x={4} y={11} width={16} height={2} rx={1} /></g></svg></a>
            <div>
              <h6 className="mb-1">Notes</h6>
              <p className="mb-0">Add New Nots</p>
            </div>
            <a href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect x={0} y={0} width={24} height={24} /><path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" /><path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" /></g></svg></a>
          </div>
          <div className="card-body contacts_body p-0 dz-scroll" id="DZ_W_Contacts_Body2">
            <ul className="contacts">
              <li className="active">
                <div className="d-flex bd-highlight">
                  <div className="user_info">
                    <span>New order placed..</span>
                    <p>10 Aug 2020</p>
                  </div>
                  <div className="ms-auto">
                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex bd-highlight">
                  <div className="user_info">
                    <span>Youtube, a video-sharing website..</span>
                    <p>10 Aug 2020</p>
                  </div>
                  <div className="ms-auto">
                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex bd-highlight">
                  <div className="user_info">
                    <span>john just buy your product..</span>
                    <p>10 Aug 2020</p>
                  </div>
                  <div className="ms-auto">
                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex bd-highlight">
                  <div className="user_info">
                    <span>Athan Jacoby</span>
                    <p>10 Aug 2020</p>
                  </div>
                  <div className="ms-auto">
                    <a href="javascript:void(0);" className="btn btn-primary btn-xs sharp me-1"><i className="fa fa-pencil" /></a>
                    <a href="javascript:void(0);" className="btn btn-danger btn-xs sharp"><i className="fa fa-trash" /></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>






          <div className="header">
            <div className="header-content">
              <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                    <div className="nav-item">
                      <div className="input-group search-area">
                        <input type="text" className="form-control" placeholder="Find something here......" />
                        <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2" /></a></span>
                      </div>
                    </div>
                  </div>
                  <ul className="navbar-nav header-right">
                    <li className="nav-item recipe">
                      <a href="javascript:void(0);" className="btn btn-primary btn-rounded">Recipe Guide</a>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <a className="nav-link  ai-icon" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.75 15.8385V13.0463C22.7471 10.8855 21.9385 8.80353 20.4821 7.20735C19.0258 5.61116 17.0264 4.61555 14.875 4.41516V2.625C14.875 2.39294 14.7828 2.17038 14.6187 2.00628C14.4546 1.84219 14.2321 1.75 14 1.75C13.7679 1.75 13.5454 1.84219 13.3813 2.00628C13.2172 2.17038 13.125 2.39294 13.125 2.625V4.41534C10.9736 4.61572 8.97429 5.61131 7.51794 7.20746C6.06159 8.80361 5.25291 10.8855 5.25 13.0463V15.8383C4.26257 16.0412 3.37529 16.5784 2.73774 17.3593C2.10019 18.1401 1.75134 19.1169 1.75 20.125C1.75076 20.821 2.02757 21.4882 2.51969 21.9803C3.01181 22.4724 3.67904 22.7492 4.375 22.75H9.71346C9.91521 23.738 10.452 24.6259 11.2331 25.2636C12.0142 25.9013 12.9916 26.2497 14 26.2497C15.0084 26.2497 15.9858 25.9013 16.7669 25.2636C17.548 24.6259 18.0848 23.738 18.2865 22.75H23.625C24.321 22.7492 24.9882 22.4724 25.4803 21.9803C25.9724 21.4882 26.2492 20.821 26.25 20.125C26.2486 19.117 25.8998 18.1402 25.2622 17.3594C24.6247 16.5786 23.7374 16.0414 22.75 15.8385ZM7 13.0463C7.00232 11.2113 7.73226 9.45223 9.02974 8.15474C10.3272 6.85726 12.0863 6.12732 13.9212 6.125H14.0788C15.9137 6.12732 17.6728 6.85726 18.9703 8.15474C20.2677 9.45223 20.9977 11.2113 21 13.0463V15.75H7V13.0463ZM14 24.5C13.4589 24.4983 12.9316 24.3292 12.4905 24.0159C12.0493 23.7026 11.716 23.2604 11.5363 22.75H16.4637C16.284 23.2604 15.9507 23.7026 15.5095 24.0159C15.0684 24.3292 14.5411 24.4983 14 24.5ZM23.625 21H4.375C4.14298 20.9999 3.9205 20.9076 3.75644 20.7436C3.59237 20.5795 3.50014 20.357 3.5 20.125C3.50076 19.429 3.77757 18.7618 4.26969 18.2697C4.76181 17.7776 5.42904 17.5008 6.125 17.5H21.875C22.571 17.5008 23.2382 17.7776 23.7303 18.2697C24.2224 18.7618 24.4992 19.429 24.5 20.125C24.4999 20.357 24.4076 20.5795 24.2436 20.7436C24.0795 20.9076 23.857 20.9999 23.625 21Z" fill="#9B9B9B" />
                        </svg>
                        <span className="badge light text-white bg-primary rounded-circle">12</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3" style={{height: 380}}>
                          <ul className="timeline">
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2">
                                  <img alt="image" width={50} src="images/avatar/1.jpg" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-info">
                                  KG
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Resport created successfully</h6>
                                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-success">
                                  <i className="fa fa-home" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2">
                                  <img alt="image" width={50} src="images/avatar/1.jpg" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-danger">
                                  KG
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Resport created successfully</h6>
                                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="timeline-panel">
                                <div className="media me-2 media-primary">
                                  <i className="fa fa-home" />
                                </div>
                                <div className="media-body">
                                  <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                  <small className="d-block">29 July 2020 - 02:26 PM</small>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <a className="all-notification" href="javascript:void(0);">See all notifications <i className="ti-arrow-end" /></a>
                      </div>
                    </li>
                    <li className="nav-item dropdown notification_dropdown">
                      <a className="nav-link bell-link ai-icon" href="javascript:void(0);">
                        <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.4604 3.84888H5.31685C4.64745 3.84961 4.00568 4.11586 3.53234 4.58919C3.059 5.06253 2.79276 5.7043 2.79202 6.3737V18.1562C2.79276 18.8256 3.059 19.4674 3.53234 19.9407C4.00568 20.4141 4.64745 20.6803 5.31685 20.6811C5.54002 20.6812 5.75401 20.7699 5.91181 20.9277C6.06961 21.0855 6.15832 21.2995 6.15846 21.5227V23.3168C6.15846 23.6215 6.24115 23.9204 6.39771 24.1818C6.55427 24.4431 6.77882 24.6571 7.04744 24.8009C7.31605 24.9446 7.61864 25.0128 7.92295 24.9981C8.22726 24.9834 8.52186 24.8863 8.77536 24.7173L14.6173 20.8224C14.7554 20.7299 14.9179 20.6807 15.0841 20.6811H19.187C19.7383 20.68 20.2743 20.4994 20.7137 20.1664C21.1531 19.8335 21.472 19.3664 21.6222 18.8359L24.8965 7.05011C24.9999 6.67481 25.0152 6.28074 24.9413 5.89856C24.8675 5.51637 24.7064 5.15639 24.4707 4.84663C24.235 4.53687 23.9309 4.28568 23.5823 4.11263C23.2336 3.93957 22.8497 3.84931 22.4604 3.84888ZM23.2733 6.60304L20.0006 18.3847C19.95 18.5614 19.8432 18.7168 19.6964 18.8275C19.5496 18.9381 19.3708 18.9979 19.187 18.9978H15.0841C14.5856 18.9972 14.0981 19.1448 13.6836 19.4219L7.84168 23.3168V21.5227C7.84094 20.8533 7.5747 20.2115 7.10136 19.7382C6.62802 19.2648 5.98625 18.9986 5.31685 18.9978C5.09368 18.9977 4.87969 18.909 4.72189 18.7512C4.56409 18.5934 4.47537 18.3794 4.47524 18.1562V6.3737C4.47537 6.15054 4.56409 5.93655 4.72189 5.77874C4.87969 5.62094 5.09368 5.53223 5.31685 5.5321H22.4604C22.5905 5.53243 22.7188 5.56277 22.8352 5.62076C22.9517 5.67875 23.0532 5.76283 23.1318 5.86646C23.2105 5.97008 23.2641 6.09045 23.2887 6.21821C23.3132 6.34597 23.3079 6.47766 23.2733 6.60304Z" fill="#9B9B9B" />
                          <path d="M7.84167 11.4233H12.0497C12.2729 11.4233 12.487 11.3347 12.6448 11.1768C12.8027 11.019 12.8913 10.8049 12.8913 10.5817C12.8913 10.3585 12.8027 10.1444 12.6448 9.98661C12.487 9.82878 12.2729 9.74011 12.0497 9.74011H7.84167C7.61846 9.74011 7.4044 9.82878 7.24656 9.98661C7.08873 10.1444 7.00006 10.3585 7.00006 10.5817C7.00006 10.8049 7.08873 11.019 7.24656 11.1768C7.4044 11.3347 7.61846 11.4233 7.84167 11.4233Z" fill="#9B9B9B" />
                          <path d="M15.4162 13.1066H7.84167C7.61846 13.1066 7.4044 13.1952 7.24656 13.3531C7.08873 13.5109 7.00006 13.725 7.00006 13.9482C7.00006 14.1714 7.08873 14.3855 7.24656 14.5433C7.4044 14.7011 7.61846 14.7898 7.84167 14.7898H15.4162C15.6394 14.7898 15.8534 14.7011 16.0113 14.5433C16.1691 14.3855 16.2578 14.1714 16.2578 13.9482C16.2578 13.725 16.1691 13.5109 16.0113 13.3531C15.8534 13.1952 15.6394 13.1066 15.4162 13.1066Z" fill="#9B9B9B" />
                        </svg>
                        <span className="badge light text-white bg-primary rounded-circle">5</span>
                      </a>
                    </li>
                    <li className="nav-item dropdown  header-profile">
                      <a className="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                        <img src="images/avatar/profile-1.jpg" width={56} alt />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="app-profile.html" className="dropdown-item ai-icon">
                          <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                          <span className="ms-2">Profile </span>
                        </a>
                        <a href="email-inbox.html" className="dropdown-item ai-icon">
                          <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                          <span className="ms-2">Inbox </span>
                        </a>
                        <a href="login.html" className="dropdown-item ai-icon">
                          <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                          <span className="ms-2">Logout </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>


        </>
    )
}

export default Header