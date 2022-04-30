import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { displayProfile } from "../Middleware/Rest_Api";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState("");

  const FetchProfile = async (e) => {
    const res = await displayProfile(id);
    setProfile(res.data.data);
    console.log("Here are the Profile: ", res);
  };

  useEffect(() => {
    FetchProfile();
  }, []);

  return (
    <div>
      {profile && (
        <ListGroup>
          <ListGroup.Item>{profile[0].username}</ListGroup.Item>
          <ListGroup.Item>{profile[0].email}</ListGroup.Item>
          <ListGroup.Item>{profile[0].name}</ListGroup.Item>
          <ListGroup.Item>{profile[0].password}</ListGroup.Item>
          <ListGroup.Item>{profile[0].description}</ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
};

export default Profile;
