import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react'
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss'


const Image = forwardRef(({ className, src, alt, fallback: defaultFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(defaultFallback)
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt} {...props}
            onError={handleError}
        />
    )
})

Image.propTypes = {
    class: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;