import NavBar from "./NavBar";

export function Guide () {

    return (
      <div id="infobody">
        <div>
            <NavBar />
        </div>
        <div className="content-regular">
            <h1>Driver guides</h1>
            <p>Use our driver guides to learn about driving in Washington, getting a license, the rules of the road, and safety tips.</p>
            <p>Ready to get behind the wheel?</p>
            <p>Before you do, make sure you know the rules of the road. This guide will help you learn driving laws in Washington and what's 
                expected of you when you're operating a vehicle.</p>
                <p><a href="https://dol.wa.gov/media/pdf/61/driverguide-enpdf/download?inline">English Driver Guide (pdf)</a></p>
            <p>The above guide and the practice test we offer here might help you to pass the knowledge and drive tests.</p>
        </div>
      </div>
          );
}
       
export default Guide;