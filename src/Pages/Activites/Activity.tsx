import { activities } from "../../Constents"
import { avtivitiesBg } from "../../Images"
import { Banner } from "../About/About"
import "./Activity.css"
export const Activity = () => {
    return (
        <>
            <Banner head="ACTIVITIES" tagline="" image={avtivitiesBg} />
            <div className="activityContainer" >
                {activities.map((activity) => {
                    return <div className="activityItem">
                        <div className="image" style={{ backgroundImage: `url(${activity.image})` }}></div>
                        <div className="activityNameAndDescription">
                            <div className="activity">{activity.activity} </div>
                            <div className="description">{activity.description} </div>
                        </div>
                    </div>
                })}
            </div>
        </>

    )
}
