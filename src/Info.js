import NavBar from "./NavBar";

export function Info () {

    return (
      <div id="infobody">
        <div>
            <NavBar />
        </div>
        <div className="content-regular">
            <h1>Information</h1>
            <p>Pass Your Washington State Knowledge Test with Confidence! </p>
            <p>Struggling to prepare for the Washington State driver's knowledge test? Our website offers easy-to-use, up-to-date 
                practice quizzes designed to help you ace the exam. <br></br>With real test-style questions and instant feedback, you'll gain 
                the confidence and knowledge you need to hit the road safely.</p>
                <p>Start practicing today—your license is just a quiz away!</p>
        </div>
      </div>
          );
}
       
export default Info;