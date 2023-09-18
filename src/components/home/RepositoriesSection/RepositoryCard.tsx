'use client';
import { Card } from "react-bootstrap";

export function RepositoryCard(props){
    
    const { name } = props;
    const image = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18aa9f9aa11%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18aa9f9aa11%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.18333435058594%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    
    const icons = {
        "public": "unlock",
        "private": "lock"
    }    

    const icon = icons[props.visibilityType];

    return (
        <Card>
            <Card.Img src={image} variant="top" />
            <Card.Body>
                <Card.Title className='mb-0'>{name}</Card.Title>
            </Card.Body>
            <Card.Footer className="bg-white p-0">
                <div className="d-flex">
                    <div className="icon border-end px-3 py-2">
                        <em className={`fas fa-${icon}`}></em>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
}