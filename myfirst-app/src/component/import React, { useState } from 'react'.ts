import React, { useState } from 'react'

const AddItemsForm = props => {
    const initialFormState = { id: null, itemname: '', description:'', price:null, quantity:'', stockreceivedDate:''}
    const [ item, setItem ] = useState(initialFormState)
    const handleInputChange = event => {
		const { name, value} = event.target

		setItem({ ...item, [name]: value })
	}
    return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if ( !item.itemname || !item.description || !item.price || !item.quantity || !item.stockreceivedDate) return

				props.addItem(item)
				setItem(initialFormState)
			}}
		>   <label>Id</label>
            <input type="text" name="id" value={item.id} onChange={handleInputChange} />
            <label>Item name</label>
			<input type="text" name="itemname" value={item.itemname} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={item.description} onChange={handleInputChange} />
            <label>Price</label>
			<input type="text" name="price" value={item.price} onChange={handleInputChange} />
            <label>Quantity</label>
			<input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
            <label>Stock received Date</label>
			<input type="text" name="stockreceivedDate" value={item.stockreceivedDate} onChange={handleInputChange} />
            <button class="input">Add new user</button>
        </form>

    )
}
export default AddItemsForm;

...............AddItemsForm........................AddItemsForm
import React, { useState, useEffect } from 'react'

const EditItemForm = props => {
  const [ item, setItem ] = useState(props.currentItem)

  useEffect(
    () => {
      setItem(props.currentItem)
    },
    [ props ]
  )
  const handleInputChange = event => {
    const { itemname, value } = event.target

    setItem({ ...item, [itemname]: value })
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateItem(item.id, item)
      }}
    >       <label>Id</label>
            <input type="text" name="id" value={item.id} onChange={handleInputChange} />
            <label>Item name</label>
            <input type="text" name="itemname" value={item.itemname} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={item.description} onChange={handleInputChange} />
            <label>Price</label>
			<input type="text" name="price" value={item.price} onChange={handleInputChange} />
            <label>Quantity</label>
			<input type="text" name="quantity" value={item.quantity} onChange={handleInputChange} />
            <label>Stock received Date</label>
			<input type="text" name="stockreceivedDate" value={item.stockreceivedDate} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
  )
}

export default EditItemForm
[Symbol]...............................EditItemForm...............



import React from 'react'

const ItemTable = props => (
  <table>
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Stock received Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.itemname}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.stockreceivedDate}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}
                className="button muted-button"
              >
                  Edit
              </button>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
          ))
          ) : (
            <tr>
              <td colSpan={3}>No Items</td>
            </tr>
          )}
        </tbody>
      </table>
    )
    
    export default ItemTable;
    ...............................................
    import React, { useState, Fragment } from 'react'
import AddItemsForm from './additem'
import EditItemForm from './edititemform'
import ItemTable from './itemtable'
import './style.css'
const App4 = () => {
	// Data
	const itemsData = [
		{ id: 1, itemname: 'shirt', description:'for men', price:'340', quantity:'20', stockreceivedDate:'20/04/2021' },
        { id: 1, itemname: 'pant', description:'unisex', price:'340', quantity:'20', stockreceivedDate:'20/04/2021' },
        { id: 1, itemname: 'skirt', description:'for women', price:'340', quantity:'20', stockreceivedDate:'21/04/2021' },
		
	]
    const initialFormState = { id: null, itemname: '', description:'', price:'', quantity:'', stockreceivedDate:''}
    // Setting state
	const [ items, setItems ] = useState(itemsData)
	const [ currentItem, setCurrentItem ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
    // CRUD operations
	const addItem = item => {
		item.id = items.length + 1
		setItems([ ...items,item ])

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

		setCurrentItem({ id:item.id, itemname:item.itemname,description:item.description,price:item.price,quantity:item.quantity,stockreceivedDate:item.stockreceivedDate})
	}
    return (
		<div className="container">
			<h1>fashon fiesta</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add item</h2>
							<AddItemsForm addItem={addItem} />
						</Fragment>
					)}
                    </div>
				<div className="flex-large">
					<h2>View items</h2>
					<ItemTable items={items} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}
}

export default App4;
............................................