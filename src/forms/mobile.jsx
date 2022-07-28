import React, {useState, useEffect} from "react";
import '../styles/App.scss';
import '../styles/media.scss';
import cardsLogo from '../assets/cards3.svg'
import profileLogo from '../assets/images/profile-icon.svg'
import profileGraph from '../assets/images/graph-mobile.svg'
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
import carButton from '../assets/images/car-button-mobile.svg'
import carLocked from '../assets/images/big-car-locked.svg'
import carUnlocked from '../assets/images/big-car-unlocked.svg'
import { ReactComponent as Logo } from '../assets/dis-ic.svg'
import { ReactComponent as Logo1 } from '../assets/telega-ic.svg'
import { ReactComponent as Logo2 } from '../assets/arror-up.svg'
import { ReactComponent as Logo3 } from '../assets/arror-down.svg'
import { ReactComponent as Logo4 } from '../assets/t-t-t.svg'
import { ReactComponent as Logo5 } from '../assets/images/Path2.svg'
import { ReactComponent as Logo7 } from '../assets/images/profile-button-mobile.svg'
import {RangeStepInput} from 'react-range-step-input';
import { customStyles1} from '../data';
const Mobile = (props) => {
    const [styleFilters, setStyle] = useState('');

    const [carSlide, setCount] = useState('');
    function handleNextButtonClick(e){
        if(e.target.value == 0) {

                setStyle("194px")
        }else if(e.target.value == 1) {

                setStyle("176px")

            }
            else if(e.target.value == 2) {
                setStyle("164px")

            }
            else if(e.target.value == 3) {
                setStyle("149px")

            }
            else if(e.target.value == 4) {
                setStyle("134px")

            }
            else if(e.target.value == 5) {
                setStyle("119px")

            }
            else if(e.target.value == 6) {
                setStyle("106px")

            }
            else if(e.target.value == 7) {
                setStyle("91px")

            }
            else if(e.target.value == 8) {
                setStyle("77px")

            }
            else if(e.target.value == 9) {
                setStyle("62px")

            }
            else if(e.target.value == 10) {
                setStyle("49px")
  
            }
            else if(e.target.value == 11) {
                setStyle("34px")
           
            }
            else if(e.target.value == 12) {
                setStyle("21px")
            
            }
          
        setCount(e.target.value);
    }
    useEffect(() => {
        setCount(6);
        setStyle("106px")
    }, []);
    return (
        <div className="App-mob">
            <header>
                <div className="menu-open"/>
                <div className="mobile-cards-header">
                    <div className="mobile-cards-header-content"></div>     
                </div>        
                <div className='user-name'>
                    <div className='user-pr'>
                        <div className='user-q'/>
                    </div>
                </div>
            </header>
            
            <div className = "personal-link">
                <div className = "pesonal-link-content">
                    <div className = "personal-link-title">My personal link:</div>
                    <div className='link-lower-panel'>
                        <div className='link-line'>
                            <div className='link-purple-line'></div>
                            <div className='link-text'>BSG.IO/Id1245</div>
                        </div>
                        <div>
                            <img className='link-img1' src = {linkCopy}></img>
                            <img className='link-img2' src = {linkShare}></img>
                        </div>
                    </div>
                </div>
            </div>
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
                    <Logo5 className="path" style={{ transform: "rotate(180deg)" }}/>
                </div>
                <div className='score-graph'>
                    <div className='graph'>
                        <img className="profile-img1" src = {profileGraph}></img>
                        <img className = "profile-img2" src={graphPoint} />
                    </div>
                    <div className='profit-block'>
                        <div className='profit'>
                            Your profit:
                        </div>
                        <div id = "profile-id" className="profile-id">
                            <div className="id2">56.054 BNB</div>
                            <div className="id1">56.054 BNB</div>
                            <div className="id3">56.054 BNB</div>
                        </div>
                        <div className='button-show'>
                            <Logo7 className="button-show-svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='dashboard-title'>
                <div className="id2">Dashboard</div>
                <div className="id1">Dashboard</div>
                <div className="id3">Dashboard</div>
            </div>
            <div className='number-cards'>
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
                    <div className='card-under-line-selected'></div>
                </div>
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
                    <div className='card-under-line-selected'></div>
                </div>
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
                    <div className='card-under-line-selected'></div>
                </div>
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
                    <div className='card-under-line-selected'></div>
                </div>
            </div>
            <h1 id='car-information'>Here all your cars and main information</h1>
            <div className='left-up-bl'>
                <h1 id='left-up-bl-up-h1'>Binance Smart Game</h1>
                <div className='left-up-bl-up'>
                    <div className="card-count">
                        <div className="id2">$129,850</div>
                        <div className="id1">$129,850</div>
                        <div className="id3">$129,850</div>
                    </div>
                    <div className='left-up-bl-up-active'>
                        <h1> Active</h1>
                    </div>
                </div>
                <div className='left-up-bl-check-up'>
                    <div className='left-up-bl-check-up-block-enable'>
                        <div className='check-box'/>
                    </div>
                    <div className='left-up-bl-check-up-block-plus'>
                        <div className='plus-box'/>
                    </div>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block' style = {{marginRight:"0"}}/>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block' style = {{marginRight:"0"}}/>
                    <div className='left-up-bl-check-up-block'/>
                    <div className='left-up-bl-check-up-block'/>
                </div>
            </div>
            <div className="your-last-car">
                <div className = "your-last-car-content">
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
                    <div className='left-down-bl-down-line'/>
                </div>
            </div>
             
            <div className='car'>
                <div className='car-upper-block'>
                    <div className="upper-block-1">
                        <img className='car-img1' src = {carTesla}></img>
                        <div className='car-tesla-text'>Cyber Car V2</div>
                        <div className='car-tesla-text2'>LEVEL 8</div>
                    </div>
                    <div className = "mobile-slider">
                        <div className = "car-slider-limit">0</div>
                            <input 
                                id="typeinp" 
                                type="range" 
                                min="0" max="12" 
                                step="1"
                                value={carSlide}
                                onChange={handleNextButtonClick}
                                
                            />
                            <h1 className="carSlideText" style = {{right: styleFilters}} >{carSlide}</h1>
                        <div className = "car-slider-limit" style = {{marginLeft:"-5px"}}>12</div>
                    </div>  
                    <img className='car-img2' src = {carUpgrade}></img>
                </div>
                <div className="car-parameters-all">
                    <div className = "car-parameters">
                        <div className='car-parameter'>
                            <div className = "car-parameter-title" style={{fontSize:"9px"}}>TEMPERATURE</div>
                            <div className = "car-parameter-value-content">
                                <div className='car-parameter-value-text1'>20</div>
                                <div className='car-parameter-value-text2'>ºC</div>
                            </div>
                            <div className='car-control'>
                                <Logo2 className='car-control-up'/>
                                <Logo3 className='car-control-down'/>
                            </div>
                        </div>
                        <div className='car-parameter'>
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
                    <div className = "car-parameters">
                        <div className='car-parameter'>
                            <div id = "car-content2" className='car-parameter-content'>
                                <div className='car-parameter-content-column'>
                                    <div className = "car-parameter-title" style = {{marginLeft:"22%"}}>BATTERY</div>
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
                                    <div id = "parameter-4" className = "car-parameter-title" style = {{marginLeft:"22%"}}>TRIP A</div>
                                    <div className = "car-parameter-value3">
                                        <div className='car-2-lines'>
                                            <div id = "car-value-content" className = "car-parameter-value-content">
                                                <div className='car-parameter-value-text3'>151</div>
                                                <div id = "car-text2" className='car-parameter-value-text2'>km</div>
                                            </div>
                                            <div id = "car-value-content"  className = "car-parameter-value-content">
                                                <div className='car-parameter-value-text3'>1.4</div>
                                                <div id = "car-text2" className='car-parameter-value-text2'>h</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className='car-img5' src = {carButton}></img>
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
                            <div id = "locked" style = {{marginRight:"5px"}}/>
                        </div>
                        <div className = "car-big-up">
                            <div id = "locked" style={{marginTop: "50px"}}/>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className='left-footer'>
                <h1> Be in touch with us:</h1>
                <div className='footer-line'/>
                <div className='left-footer-ic'>
                    <Logo className='dis-f'/>
                    <Logo1 className='telega-f'/>
                </div>
            </div>
            <div className="c-c-mobile">
                <div className='c-c'>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='word-ic'/>
                            <h1> Dashboard</h1> 
                        </div>
                    </div>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='stat-ic'/>
                            <h1> Stats</h1> 
                        </div>
                    </div>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='partner-ic'/>
                            <h1> Partner bonus</h1> 
                        </div>
                    </div>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='info-ic'/>
                            <h1> Info</h1> 
                        </div>
                    </div>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='telega-ic'/>
                            <h1> Telegram bot</h1> 
                        </div>
                    </div>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='promo-ic'/>
                            <h1> Promo</h1> 
                        </div>
                    </div>
                    <div className='footer-position'>
                        <div className='line-f'>
                            <div className='news-ic'/>
                            <h1> News</h1> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='r-c'>
                <div className='r-c-obs'>
                    <div className='chatik'>
                        <Logo4 className='chat-ic'/>
                        <h1> Chat with us</h1>                           
                    </div>
                </div>
            </div>
            <div className="driiidik"/>
        </div>
    )
}

export {Mobile}