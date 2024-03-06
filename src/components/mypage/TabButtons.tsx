import { useEffect , useState , useRef } from 'react'
import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { Button } from "../../../src/components/common/button"

interface TabButtonsProps{
  setTab: React.Dispatch<React.SetStateAction<string>>;
  tabArray: string[]
}

export const TabButtons:React.FC<TabButtonsProps> = ({setTab , tabArray}) => {

  return (
    <>
      <div>
        {
          tabArray.map(( myArray , index )=>{
            return(
              <Button
              key = {index} 
              backgroundColor = {Colors.purple}
              color = {Colors.white}
              label = {`${myArray}`}
              size = "middle"
              purpose="event"
              onClick = {() => setTab(myArray)}
            />
          )})
        }
      </div>
    </>
  );
};