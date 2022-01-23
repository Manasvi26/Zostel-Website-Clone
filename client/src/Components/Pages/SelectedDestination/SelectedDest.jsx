import { LocateUs } from "./LocateUs/LocateUs"
import { Footer } from "./Footer/Footer"
import {RangeSelector} from './RangeSelector/RangeSelector'
import { UpperDescription } from "./UpperDescription/UpperDescription"

export const SelectedDestination=()=>{
    return <>
        <UpperDescription />
        <RangeSelector />
        <LocateUs />
        <Footer />
    </>
}