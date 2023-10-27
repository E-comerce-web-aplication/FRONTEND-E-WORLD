import { CommonLayout } from '../../Layout'
import { OptionButtons } from '../Components/OptionButtons'
import { UserInformation } from '../Components/UserInformation'


export const ProfilePage = ()=>{
    return (
        <CommonLayout>
            <main className='flex flex-col gap-1 m-1'>
                <UserInformation/>
                <OptionButtons/>
            </main>
        </CommonLayout>  
    )
}