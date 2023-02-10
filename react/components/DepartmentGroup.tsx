import React from "react";

type Props = {
  departments: [Category],
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug } : Props) =>  {
  console.log("Grupo de department:", departments)

  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const DepartmentOptions: any = departments.map((department: Category) => {
    return (
      <option
      value={department.slug}
      key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <select
    style={{padding: "1px", marginTop: "2rem", marginBottom: "2rem", marginLeft: ".5rem", color: "grey"}}
    onChange={onHandleSetSlug}
    defaultValue="value0">
      <option disabled value="value0">Selecciona una opción</option>
      {DepartmentOptions}
    </select>
  )

}

export default DepartmentGroup
