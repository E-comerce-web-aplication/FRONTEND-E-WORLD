import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { useEffect } from "react"
import { getAllCompanies } from "../../Store/company/thunks"
import { CompanyList } from "../Components/CompanyList"
import { CompanyItem } from "../Components/CompanyItem"



export const HomeCompanyPage = ()=>{

    const dispatch = useDispatch()
    const { token } = useSelector( state => state.auth )

    useEffect(()=>{
        dispatch( getAllCompanies( token ) )
    }, [])

    const { companyList } = useSelector( state => state.company )
  
    return (
        <CommonLayout>
            <CompanyList>
                {
                    companyList.map((company, index )=>(
                        <CompanyItem key={company.id} data={ companyList[index] }/>
                    ))
                }
            </CompanyList>
        </CommonLayout>
    )
}