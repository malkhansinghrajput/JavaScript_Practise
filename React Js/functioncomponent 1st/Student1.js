import profilepic from '../../images/img_avatar1.png'

const studStyle = {
    backgroundColor: "brown", color: 'white', marginLeft: 20, marginRight: 20, padding: 10, borderRadius: 10, border: "5px solid black"
}

function Student1(props) {
    return (
        <div style={{display:'flex'}}>
            {/* <img src={profilepic} width={320} height={320} 
            style={{borderRadius:'50%'}}
            /> */}
             <img src="https://play-lh.googleusercontent.com/7oW_TFaC5yllHJK8nhxHLQRCvGDE8jYIAc2SWljYpR6hQlFTkbA6lNvER1ZK-doQnQ" width={320} height={320} 
            style={{borderRadius:'50%'}}
            />
            
            <div>
                <h2 style={studStyle}>Name:{props.name}</h2>
                <h2 style={studStyle}>Rollno:{props["rollno"]}</h2>
                <h2 style={studStyle}>Course:{props.course}</h2>
                <h2 style={studStyle}>Fees in &#8377;:{props.fees}</h2>
            </div>
        </div>
    )

}

export default Student1