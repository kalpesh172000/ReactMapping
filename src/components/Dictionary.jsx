import { emojipedia } from "../emojipedia";
import Entry from "./Entry";

function addEntry(emojipedia){
    return (
        <Entry key={emojipedia.id} emoji={emojipedia.emoji} name={emojipedia.name} meaning={emojipedia.meaning}/>
    )            
}

function Dictionary(props) {
    return (
        <dl className="dictionary">
            {
                emojipedia.map(addEntry)
            }
        </dl>
    );
}

export { Dictionary };

