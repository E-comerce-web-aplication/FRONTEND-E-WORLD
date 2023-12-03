import { CommonLayout } from '../../Layout'
import { OptionButtons } from '../Components/OptionButtons'
import { OrganizationInfo } from '../Components/OrganizationInfo'
import { UserInformation } from '../Components/UserInformation'


export const ProfilePage = ()=>{
  
    return (
        <CommonLayout>
            <main className='flex flex-col gap-1 m-1'>
                <UserInformation/>
                <OrganizationInfo/>
                <OptionButtons/>
            </main>
        </CommonLayout>  
    )
}