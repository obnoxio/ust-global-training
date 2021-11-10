import React, { useState, Fragment } from 'react'
import AddItemForm from './additem'
import EditItemForm from './edititemform'
import ItemTable from './itemtable'
import { Table } from './table1'
import './style.css'


const App4 = () => {


  const columns = [
    { accessor: 'id', label: 'Id' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'description', label: 'Description', },
    { accessor: 'price', label: 'Price' },
    { accessor: 'quantity', label: 'Qty' },
    { accessor: 'date', label: 'Date' },
    
  ]

	// Data
	const ItemData = [
		{ id: 1, name: 'linen shirts', description: 'for comfort' , price:1490 , quantity :6 ,date:'20/04/2021'},
		{ id: 2, name: 'jeans', description: 'pepe' , price:790 , quantity :10 ,date:'20/05/2021'},
		{ id: 3, name: 'shorts', description: 'comfort fitting' , price:300 , quantity :11 ,date:'20/06/2021'},
        { id: 4, name: 't-shirt', description: 'calvin&klein' , price:450 , quantity :12 ,date:'20/07/2021'},
        { id: 5, name: ' designer Shirt', description: 'polymix' , price:750 , quantity :9 ,date:'20/08/2021'},
        { id: 6, name: 'kerala style dhothi', description: 'khadhi' , price:850 , quantity :5 ,date:'20/09/2021'},
	]

	const initialFormState = { id: null, name: '', description: '' ,price:null, quantity:null,date:''}

	// Setting state
	const [ items, setItems ] = useState(ItemData)
	const [ currentItem, setCurrentItem ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addItem = item => {
		item.id = items.length + 1
		setItems([ ...items, item ])
	}

	const deleteItem = id => {
		setEditing(false)

		setItems(items.filter(item => item.id !== id))
	}

	const updateItem = (id, updatedItem) => {
		setEditing(false)

		setItems(items.map(item => (item.id === id ? updatedItem : item)))
	}

	const editRow = item => {
		setEditing(true)

		setCurrentItem({ id: item.id, name: item.name, description: item.description,price:item.price,quantity:item.quantity,date:item.date })
	}

	return (
		<div className="container1">
			<h1>fashion fiesta </h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Items</h2>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View items</h2>
					{/* <ItemTable items={items} editRow={editRow} deleteItem={deleteItem} /> */}
          <Table rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem} />
          
                </div>
			</div>
		</div>
	)
}

export default App4