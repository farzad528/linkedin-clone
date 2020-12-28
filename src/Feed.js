import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from "@material-ui/icons";
import React from "react";
import "./Feed.css"
import InputOption from "./InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
              <input type="text"/>
              <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
            <InputOption title="Photo" Icon={Image} color="#70b5f9" />
            <InputOption title="Video" Icon={Subscriptions} color="#e7a33e" />
            <InputOption title="Event" Icon={EventNote} color="#c0cbcd" />
            <InputOption title="Write Article" Icon={CalendarViewDay} color="#7fc15e" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
