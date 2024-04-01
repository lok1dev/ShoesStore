import { useState, useEffect, useRef } from "react";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useDebounce } from "~/hooks";

import * as searchServices from '~/services/searchService'
import { Wrapper as WrapperPopper } from "~/components/Popper";
import styles from './Search.module.scss'
import { SearchIcon } from "~/components/Icons";

const cx = classNames.bind(styles)

function SearchBox() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500)

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return;
        }

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debouncedValue)
            setSearchResult(result)

            setLoading(false)
        }
        fetchApi()
    }, [debouncedValue])

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            return setSearchValue(searchValue)
        }
    }


    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <h4 className={cx('search-title')}>Products</h4>
                            {searchResult.map((result) => (
                                <></>
                                // <ProductItem key={result.id} data={result} />
                            ))}
                        </WrapperPopper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >

                <div className={cx('search')}>
                    <input placeholder="Search products"
                        ref={inputRef}
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => { setShowResult(true) }}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}


                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>

                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchBox;