import React, {useState, useEffect} from "react";
import '../styles/App.scss';
import '../styles/media.scss';
import cardsLogo from '../assets/cards3.svg'
import profileLogo from '../assets/images/profile-icon.svg'
import walletIcon from '../assets/images/wallet-icon.svg'
import peopleIcon from '../assets/images/people-icon.svg'
import likeIcon from '../assets/images/like-icon.svg'
import path from '../assets/images/Path.svg'
import graphPoint from '../assets/images/graph-point.svg'
import buttonShow from '../assets/images/button-show.svg'
import cardDollar from '../assets/images/card-dollar.svg'
import cardTools from '../assets/images/card-tools.svg'
import cardTrade from '../assets/images/card-trade.svg'
import cardTime from '../assets/images/card-time.svg'
import cardProgress from '../assets/images/card-progress.svg'
import linkCopy from '../assets/images/link-copy.svg'
import linkShare from '../assets/images/link-share.svg'
import carTesla from '../assets/images/car-tesla.svg'
import carUpgrade from '../assets/images/car-upgrade.svg'
import carControls from '../assets/images/car-controls.svg'
import carLevel from '../assets/images/car-level.svg'
import carButton from '../assets/images/car-button.svg'
import carLocked from '../assets/images/big-car-locked.svg'
import carUnlocked from '../assets/images/big-car-unlocked.svg'
import { ReactComponent as Logo } from '../assets/dis-ic.svg'
import { ReactComponent as Logo1 } from '../assets/telega-ic.svg'
import { ReactComponent as Logo2 } from '../assets/arror-up.svg'
import { ReactComponent as Logo3 } from '../assets/arror-down.svg'
import { ReactComponent as Logo4 } from '../assets/t-t-t.svg'
import { ReactComponent as Logo5 } from '../assets/images/Path2.svg'
import { ReactComponent as Logo6 } from '../assets/images/button-show.svg'
import {RangeStepInput} from 'react-range-step-input';
import { customStyles1} from '../data';


const Decstop = (props) => {
    const [styleFilters, setStyle] = useState('');

    function getback(){
        var div = document.getElementById('typeinp');
        div.className = 'new5'; // задать класс
    }

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const [carSlide, setCount] = useState('');
    function handleNextButtonClick(e){
        if(e.target.value == 0) {
            var div = document.getElementById('typeinp');
            div.className = 'new0'; // задать класс
        }else if(e.target.value == 1) {
            var div = document.getElementById('typeinp');
            div.className = 'new1'; // задать класс
            }
            else if(e.target.value == 2) {
                var div = document.getElementById('typeinp');
                div.className = 'new2'; // задать класс

            }
            else if(e.target.value == 3) {
                var div = document.getElementById('typeinp');
                div.className = 'new3'; // задать класс
            }
            else if(e.target.value == 4) {
                var div = document.getElementById('typeinp');
                div.className = 'new4'; // задать класс

            }
            else if(e.target.value == 5) {
                var div = document.getElementById('typeinp');
                div.className = 'new5'; // задать класс

            }
            else if(e.target.value == 6) {
                var div = document.getElementById('typeinp');
                div.className = 'new6'; // задать класс

            }
            else if(e.target.value == 7) {
                var div = document.getElementById('typeinp');
                div.className = 'new7'; // задать класс

            }
            else if(e.target.value == 8) {
                var div = document.getElementById('typeinp');
                div.className = 'new8'; // задать класс

            }
            else if(e.target.value == 9) {
                var div = document.getElementById('typeinp');
                div.className = 'new9'; // задать класс

            }
            else if(e.target.value == 10) {
                var div = document.getElementById('typeinp');
                div.className = 'new10'; // задать класс
            }
            else if(e.target.value == 11) {
                var div = document.getElementById('typeinp');
                div.className = 'new11'; // задать класс

            }
            else if(e.target.value == 12) {
                var div = document.getElementById('typeinp');
                div.className = 'new12'; // задать класс
            }

        setCount(e.target.value);
    }
    useEffect(() => {
        setCount(6);
        var div = document.getElementById('typeinp');
        div.className = 'new6'; // задать класс
    }, []);

    return (
        <div className="App-dec">
            <header>
                <div className='left-sec'>
                    <div className="menu-open"/>
                    <div className="card-prime-img"></div>
                    <div className="card-prime">
                        <h1>New era of crypto games</h1> 
               
                    </div>
                </div>
                <div className='center-sec'>
                    <div className='smart-sc'>
                        <div className='smart-b'/>
                        <h1> Smart Chain</h1>
                    </div>
                    <div className='money'>
                        <div className='w-t'>
                            <div className='wallet'/>
                            <h1 style={{ marginLeft: "7px"}}> 5.621 BNB </h1>
                        </div>
                        <div className='string'/>
                        <h1> 0xB2...31</h1>
                    </div>
                </div>
                <div className='right-sec'>
                    <div className='user-name'>
                        <h1> ID #3241</h1>
                        <div className='user-pr'>
                            <div className='user-q'/>
                        </div>
                    </div>
                    <div className='search'/>
                </div>
            </header>

          <div className='center'>
            <div className='profile'>
                <div className='profile-icon'>
                    <img src={profileLogo} />
                </div>
                <div className="profile-id">
                    <div className="id1">ID 363024</div>
                    <div className="id2">ID 363024</div>
                    <div className="id3">ID 363024</div>
                </div>
                <div className='wallet-id'>
                    <img src={walletIcon} style={{ marginRight: "5px" }} />
                    <div>0xB35d53...9914</div>
                </div>
                <div className='arrows-menu'>
                    <Logo5 className="path"/>
                    <div className='arrow-people'>
                        <div className='arrow-icon'>
                            <img src={peopleIcon}></img>
                        </div>
                        <div className='arrow-under-text'>
                            5.5k
                        </div>
                    </div>
                    <div className='horizontal-line'></div>
                    <div className='arrow-people'>
                        <div className='arrow-icon'>
                            <img id='sex' src={likeIcon}></img>
                        </div>
                        <div className='arrow-under-text'>
                            103k
                        </div>
                    </div>
                    <Logo5 className="path" id= "path-2" style={{ transform: "rotate(180deg)" }}/>
                </div>
                <div className='score-graph'>
                    <div className='graph'>
                        <img src={graphPoint} />
                    </div>
                    <div className='profit-block'>
                        <div className='profit'>
                            Your profit:
                        </div>
                        <div className="profile-id" id="pr-id">
                            <div className="id2">56.054 BNB</div>
                            <div className="id1">56.054 BNB</div>
                            <div className="id3">56.054 BNB</div>
                        </div>
                        <div className='button-show'>
                            <Logo6 className="button-show-svg"/>
                            <h1 className="button-show-plus">+</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='r-c-s'>
         
            <div className='dashboard'>
                    <div className='dashboard-title'>
                        <div className="id2">Dashboard</div>
                        <div className="id1">Dashboard</div>
                        <div className="id3">Dashboard</div>
                    </div>
                    <div className = "personal-link">
                        <div className = "pesonal-link-content">
                            <div className = "personal-link-title">My personal link:</div>
                            <div className='link-lower-panel'>
                                <div className='link-line'>
                                    <div className='link-purple-line'></div>
                                    <div className='link-text'>BSG.IO/Id1245</div>
                                </div>
                                <img className='link-img1' src = {linkCopy}></img>
                                <img className='link-img2' src = {linkShare}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='number-cards'>
                    <div className='card-over'>
                        <div className='card'>
                            <div className='card-all'>
                                <div className = "card-content">
                                    <div className='card-text'>
                                        Money in project
                                    </div>
                                    <div className='card-under-line'></div>
                                    <div className='card-count-block'>
                                        <div className="card-count">
                                            <div className="id2">$129,850</div>
                                            <div className="id1">$129,850</div>
                                            <div className="id3">$129,850</div>
                                        </div>
                                        <div className = "card-percent">+15%</div>
                                    </div>                        
                                </div>
                                <img className = "card1-img" src = {cardDollar}></img>
                            </div>
                        </div>
                    <div className='card-under-line-selected'></div>
                </div>
                <div className='card-over'>
                    <div className='card'>
                        <div className='card-all'>
                            <div className = "card-content">
                                <div className='card-text'>
                                    People here
                                </div>
                                <div className='card-under-line2'></div>
                                <div className='card-count-block'>
                                    <div className="card-count">
                                        <div className="id2">25,000</div>
                                        <div className="id1">25,000</div>
                                        <div className="id3">25,000</div>
                                    </div>
                                </div>                        
                            </div>
                            <img className='card2-img' src = {cardTools}></img>
                        </div>

                    </div>
                    <div className='card-under-line-selected'></div>
                </div>
                <div className='card-over'>
                    <div className='card'>
                        <div className='card-all'>
                            <div className = "card-content">
                                <div className='card-text'>
                                    Money back
                                </div>
                                <div className='card-under-line2'></div>
                                <div className='card-count-block'>
                                    <div className="card-count">
                                        <div className="id2">25,000</div>
                                        <div className="id1">25,000</div>
                                        <div className="id3">25,000</div>
                                    </div>
                                    <div className = "card-percent2">-21%</div>
                                </div>                        
                            </div>
                            <img className = "card3-img" src = {cardTrade}></img>
                        </div>
                    </div>
                    <div className='card-under-line-selected'></div>
                </div>
                <div className='card-over'>
                    <div className='card'>
                        <div className='card-all' style = {{flexDirection:"column"}}>
                            <div className = "card4-content">
                                <div className = "card4-first">
                                    <div className='card-text'>
                                        Time of end
                                    </div>
                                    <div className='card-under-line2'></div>
                                </div>
                                <img className = "card4-img" src = {cardTime}></img>                      
                            </div>
                            <div className='card-count-block2'>
                                <div className="card-count2">
                                    <div className="id2">72%</div>
                                    <div className="id1">72%</div>
                                    <div className="id3">72%</div>
                                </div>
                                <img src={cardProgress}></img>
                            </div>  
                        </div>

                    </div>
                    <div className='card-under-line-selected'></div>
                </div>
                </div>
                <h1 id='car-information'>Here all your cars and main information</h1>
                <div className='down-c-s'>
                    <div className='left-right-c-s'>
                        <div className='left-up-bl'>
                            <div className='left-up-bl-up'>
                                <h1 id='left-up-bl-up-h1'>Binance Smart Game</h1>
                                <div className='left-up-bl-up-active'>
                                    <h1> Active</h1>
                                </div>
                            </div>
                            <div id="binance" className="card-count">
                                <div className="id2">$129,850</div>
                                <div className="id1">$129,850</div>
                                <div className="id3">$129,850</div>
                            </div>
                            <div className='left-up-bl-check'>
                                <div className='left-up-bl-check-up'>
                                    <div className='left-up-bl-check-up-block-enable'>
                                        <div className='check-box'/>
                                    </div>
                                    <div className='left-up-bl-check-up-block-plus'>
                                        <div className='plus-box'/>
                                    </div>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                </div>
                            </div>
                        </div>
                        <div className='left-down-bl-2'>
                            <div className='left-down-bl-1'>
                                <div className='left-down-bl'>
                                    <div className='left-down-bl-up'>
                                        <h1>Your last car for Race</h1>
                                    </div>
                                    <div className='left-down-bl-down'>
                                        <div className='left-down-bl-down-left'>
                                            <h1 id='left-down-bl-down-left-h1'>Staking</h1>
                                            <h1 id='left-down-bl-down-left-h2'>+15%</h1>
                                            <h1 id='left-down-bl-down-left-h3'>Race speed</h1>
                                            <h1 id='left-down-bl-down-left-h4'>+15%</h1>
                                        </div>
                                        <div className='left-down-bl-down-right'>
                                            <div className='left-down-bl-down-right-car'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='left-down-bl-down-line'/>
                        </div>
                    </div>
                    <div className="left-down-left-bl">
                    <div className='car'>
                    <div className='car-upper-block'>
                        <img className='car-img1' src = {carTesla}></img>
                        <div className='car-tesla-text'> Cyber Car V2</div>
                        <div className='car-tesla-text2'>LEVEL 8</div>
                        <div className = "car-slider-limit">0</div>
                            <input 
                                className="new6"
                                id="typeinp" 
                                type="range" 
                                min="0" max="12" 
                                step="1"
                                value={carSlide}
                                onChange={handleNextButtonClick}
                            />
                           
                        <div className = "car-slider-limit">12</div>
                        <img className='car-img2' src = {carUpgrade}></img>
                    </div>
                    <div className='car-center-block'>
                        <div className = "car-parameters">
                            <div className='car-parameter'>
                                <div className='car-parameter-content'>
                                    <div className = "car-parameter-title">TEMPERATURE</div>
                                    <div className = "car-parameter-value">
                                        <div className = "car-parameter-value-content">
                                            <div className='car-parameter-value-text1'>20</div>
                                            <div className='car-parameter-value-text2' id="percent">ºC</div>
                                        </div>
                                        <div className='car-control'>
                                            <Logo2 className='car-control-up'/>
                                            <Logo3 className='car-control-down'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='car-parameter'>
                                <div className='car-parameter-content2'>
                                    <div className = "car-parameter-title">PHONE</div>
                                    <div className = "car-parameter-value2">
                                        <div className='car-radio'>
                                            <div className='car-radio-text'>Speaker</div>
                                            <div class="button r" id="button-1">
                                                <input type="checkbox" class="checkbox" />
                                                <div class="knobs"></div>
                                                <div class="layer"></div>
                                            </div>
                                        </div>
                                        <div className='car-radio'>
                                            <div className='car-radio-text'>Mute</div>
                                            <div class="button r" id="button-1">
                                                <input type="checkbox" class="checkbox" />
                                                <div class="knobs"></div>
                                                <div class="layer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='car-big'>
                            <div className = "car-big-content">
                                <div className = "car-big-up">
                                    <div id = "locked" style={{marginTop: "36px"}}/>
                                </div>
                                <div className = "car-big-center">
                                    <div id = "locked"/>
                                    <div id = "locked"/>
                                </div>
                                <div className = "car-big-up">
                                    <div id = "locked" className="locked-down"/>
                                </div>
                            </div>
                        </div>
                        <div className = "car-parameters">
                            <div className='car-parameter'>
                                <div id = "car-content2" className='car-parameter-content'>
                                    <div className='car-parameter-content-column'>
                                        <div className = "car-parameter-title">BATTERY</div>
                                        <div className = "car-parameter-value3">
                                            <div className='car-2-lines'>
                                                <div id = "car-value-content" className = "car-parameter-value-content">
                                                    <div className='car-parameter-value-text3'>65</div>
                                                    <div id = "car-text2" className='car-parameter-value-text2'>%</div>
                                                </div>
                                                <div id = "car-value-content"  className = "car-parameter-value-content">
                                                    <div className='car-parameter-value-text3'>145</div>
                                                    <div id = "car-text2" className='car-parameter-value-text2'>km</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='car-img4' src = {carLevel}></img>
                                </div>
                            </div>
                            <div className='car-parameter'>
                                <div id = "car-content2" className='car-parameter-content'>
                                    <div className='car-parameter-content-column'>
                                        <div className = "car-parameter-title">TRIP A</div>
                                        <div className = "car-parameter-value3">
                                            <div className='car-2-lines'>
                                                <div className = "car-parameter-value-content">
                                                    <div id = "parameter-text3" className='car-parameter-value-text3'>151</div>
                                                    <div id = "parameter-text4" className='car-parameter-value-text2'>km</div>
                                                </div>
                                                <div className = "car-parameter-value-content">
                                                    <div id = "parameter-text3" className='car-parameter-value-text3'>1.4</div>
                                                    <div id = "parameter-text4" className='car-parameter-value-text2'>h</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='car-img5' src = {carButton}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
            



            <footer>
                <div className='pre-footer'>
                    <h1>Navigation of the site</h1>
                </div>
                <div className='footer-section'>
                    <div className='l-c'>
                        <div className='left-footer'>
                            <h1> Be in touch with us:</h1>
                            <div className='footer-line'/>
                            <div className='left-footer-ic'>
                                {/* <div className='dis-f'/> */}
                                <Logo className='dis-f'/>
                                {/* <div className='telega-f'/> */}
                                <Logo1 className='telega-f'/>
                            </div>
                        </div>
                    </div>
                    <div className='c-c'>
                        <div className="footer-block">
                            <div className='footer-position'>
                                <div className='line-f'>
                                    <div className='word-ic'/>
                                    <h1> Dashboard</h1> 
                                </div>
                            </div>
                        <div className="footer-down-line"/>
                    </div>
                    <div className="footer-block">
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='stat-ic'/>
                                <h1> Stats</h1> 
                            </div>
                        </div>
                        <div className="footer-down-line"/>
                    </div>
                    <div className="footer-block">
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='partner-ic'/>
                                <h1> Partner bonus</h1> 
                            </div>
                        </div>
                        <div className="footer-down-line"/>
                    </div>
                    <div className="footer-block">
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='info-ic'/>
                                <h1> Info</h1> 
                            </div>
                        </div>
                        <div className="footer-down-line"/>
                    </div>
                    <div className="footer-block">
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='telega-ic'/>
                                <h1> Telegram bot</h1> 
                            </div>
                        </div>
                        <div className="footer-down-line"/>
                    </div>
                    <div className="footer-block">
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='promo-ic'/>
                                <h1> Promo</h1> 
                            </div>
                        </div>
                        <div className="footer-down-line"/>
                    </div>
                    <div className="footer-block">
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='news-ic'/>
                                <h1> News</h1> 
                               </div>
                        </div>
                        <div className="footer-down-line"/>
                    </div>
                    </div>
                    <div className='r-c'>
                        <div className='r-c-obs'>
                            <div className='chatik'>
                                <Logo4 className='chat-ic'/>
                                <h1> Chat with us</h1>                           
                            </div>
                        </div>
                        <div className="driiidik"/>
                    </div>
                </div>
            </footer>
            {/* <div className='circle-3'>
                <div className='circle-2'>
                    <div className='circle-1'>
                        <div className='drid'/>
                    </div>
                </div>
            </div> */}


        </div>
    )
}

export {Decstop}