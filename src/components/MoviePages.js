import React from "react";

export class MoviePages extends React.Component {
    render() {
        const {cur_page, setPage, changePage, total_pages} = this.props;
        return(
            <div className='col-12 d-flex justify-content-center mb-4'>
                <ul className="tabs nav nav-pills">
                    <li className='page-item'>
                        <div className='page-link' onClick={setPage.bind(null, 1)}>
                            1
                        </div>
                    </li>
                    <li className='page-item'>
                        <div className='page-link' onClick={changePage.bind(null, '-')}>
                            &lt;&lt;
                        </div>
                    </li>
                    <li className='page-item'>
                        <div className='page-link noactive'>
                            {cur_page}
                        </div>
                    </li>
                    <li className='page-item'>
                        <div className='page-link' onClick={changePage.bind(null, '+')}>
                            &gt;&gt;
                        </div>
                    </li>
                    <li className='page-item'>
                        <div className='page-link' onClick={setPage.bind(null, 500)}>
                            {total_pages}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
