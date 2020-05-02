import React from 'react'

import globalStyles from '../styles/global.module.scss'

const Card = () => {
  return (
    <div className={globalStyles.card}>
      <div className={globalStyles.cardTitle}>
        <h1>
          What not to do in this COVID pandemic?
        </h1>
      </div>
      <div className={globalStyles.cardDesc}>
        <p>
          VuePress implements a content distribution API for Markdown. With this feature, you can split your document into multiple fragments to facilitate flexible composition in the layout component.
        </p>
      </div>
      <div className={globalStyles.cardFooter}>
        <div className={globalStyles.footerItem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg> Saheb Giri
        </div>
        <div className={globalStyles.footerItem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 2h2v2H6v-2zm5 0h2v2h-2v-2zm5 0h2v2h-2v-2z" /></svg> Feb 26 2019
        </div>
        <div className={globalStyles.footerItem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"/></svg> 4 min read
        </div>
      </div>
    </div>
  )
}
export default Card