import Image1 from './image/customer-service.png'
import Image2 from './image/house.png'
import Image3 from './image/mechanics.png'

const Text = () => {
    return (
            <div className="text-About ">
                    <div className="text-About-info" id="AA">
                        <p className="text-About-info-p container">
                            At BRICOL M3AK , we have the solution! Our repair service is guaranteed .Request your repair online or by calling us by phone. An artisan is dispatched to your home or company in 20 minutes and intervenes within two hours to three hours. 
                            <br/><br/>
                            Our dear client if you have a problem in”  Electricity , Plumbing , Carpenter , Building , Dyeing , Mechanics ” than BRICOL M3AK is for you we can provide you a professional, fast and comfortable service 
                        </p>
                    </div>
                    <div className="text-About-maintained" id="AA">
                        <img className='img' src={Image3} alt="image3"/>
                        <p className='p-about'>Well maintained and with advanced and high quality tools</p>
                    </div>
                    <div className="text-About-tronsport" id="AA">
                        <img className='img' src={Image2} alt="image2"/>
                        <p className='p-about'>Very fast arrival to the spot</p>
                    </div>
                    <div className="text-About-contact" id="AA">
                        <img className='img' src={Image1} alt="image1"/>
                        <p className='p-about'>Contact staff available24/7 Day</p>
                    </div>
                
            </div>
    );
};

export default Text;
