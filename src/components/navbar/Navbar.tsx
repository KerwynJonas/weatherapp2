import React, { useCallback, useContext} from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { WeatherContext } from '../../contexts/WeatherProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { system, changeSystem } = useContext(WeatherContext);

  const handleSystem = useCallback((props: any) => {
    changeSystem(props)
  }, [changeSystem]);

  return (
    <nav className='navbar-component'>
      <div className="icon">
        <FontAwesomeIcon icon={faCloudRain} />
      </div>
      <div className="buttons">
        <Link data-cy="today_btn" to='/' >Today</Link>
        <Link data-cy="week_btn" to='/week' >Week</Link>
        <Link data-cy="contact_btn" to='/contact'>Contact</Link>
      </div>

      <div className="options">
        <select defaultValue={system}>
          <option value="metric" onClick={() => handleSystem('metric')}>Metric</option>
          <option value="imperial" onClick={() => handleSystem('imperial')}>Imperial</option>
        </select>
      </div>
    </nav>
  )
}