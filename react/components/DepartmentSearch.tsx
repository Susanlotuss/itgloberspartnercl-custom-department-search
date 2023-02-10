import React, { useState } from "react"
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/GetDepartmentGroup.graphql"
import DepartmentGroup from "./DepartmentGroup"

// import { SearchBar } from "vtex.store-components"

const DepartmentSearch = () => {
  const [slug, setSlug] = useState("")
  const { data, loading } = useQuery(QUERY_VALUE)

  console.log("mis datos query son", data?.categories[0]?.children)
  console.log("slug", slug)

  return (
    loading ?
    <div>Loading...</div>
    :
    <div className="flex">
    <DepartmentGroup
    departments={data?.categories[0]?.children}
    handleSetSlug={setSlug}
    />
    {/* <SearchBar
    style={{padding: "1px", marginTop: "2rem", marginBottom: "2rem", maxWidth: "5px"}}
    customSearchPageUrl={slug}
    placeholder="¿Qué estás buscando?"
    displayMode="search-and-clear-buttons"
    /> */}
    </div>
    )
}

export default DepartmentSearch
