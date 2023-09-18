'use client';
import styles from '@/assets/sass/modules/home/grid-images.module.scss';
import { Card } from "react-bootstrap";

export function GridImages() {

    return (
        <div className={styles.heroGridContainer}>
            <Card className={styles.heroCardImage}>
                <Card.Body>
                </Card.Body>
            </Card>
            <Card className={styles.heroCardImage}>
                <Card.Body>
                </Card.Body>
            </Card>
            <Card className={styles.heroCardImage}>
                <Card.Body className='overflow-hidden'>
                    <div className='bg-danger w-100 h-100'></div>
                </Card.Body>
            </Card>
        </div>
    )
}