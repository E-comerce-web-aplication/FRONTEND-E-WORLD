import { useSelector } from 'react-redux'
import { CommonLayout } from '../../Layout'
import { OptionButtons } from '../Components/OptionButtons'
import { OrganizationInfo } from '../Components/OrganizationInfo'
import { UserInformation } from '../Components/UserInformation'


export const ProfilePage = ()=>{
    const { organizationSession } = useSelector( state => state.user )
   
    return (
        <CommonLayout>
            <main className='flex flex-col md:flex-row gap-1 m-1 md:h-[90vh]'>
                <div className='basis-[40%]'>
                    <UserInformation/>
                    <OrganizationInfo/>
                </div>
                <OptionButtons/>
            </main>
        </CommonLayout>  
    )
}