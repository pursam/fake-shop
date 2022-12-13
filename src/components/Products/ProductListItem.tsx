import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { CardActions } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>Type: {props.type}</div>
                <div>Capacity: {props.capacity} GB</div>
                <div>price: {props.price}$</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
