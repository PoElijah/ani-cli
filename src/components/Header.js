import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from "./Icon";
import {registerNewUser} from "../store/actions/usersActions";
import {connect} from 'react-redux';

class Header extends Component {
	state = {
		showUser: false,
		login: '',
		password: ''
	};
	showUser = () => {
		this.setState({showUser: !this.state.showUser})
	};
	editRegisterFields = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};
	registerUser = () => {
		console.log({
			login: this.state.login,
			password: this.state.password
		});
		this.props.registerNewUser({
			login: this.state.login,
			password: this.state.password
		})
	};
	render() {
		const {showUser, password, login} = this.state;
		return (
			<header className='mainHeader container-fluid px-5'>
				<div className="row align-items-start justify-content-between pt-4">
					<div className="mainLogo d-flex align-items-center">
						<Link to='/' className="mainLogo__letter">Y</Link>
					</div>
					<nav className="mainNav d-flex flex-column align-items-center justify-content-center">
						<div className="mainSearch">
							<input className='mainSearch__input' type="text" name="search" placeholder="Поиск..."/>
							<Icon className='mainSearch__icon' name='search'/>
						</div>
						<ul className="mainNav__ul d-flex p-0 justify-content-center">
							<li><Link to='/' className="mainNav__link">Главная</Link></li>
							<li><Link to='#' className="mainNav__link">Сериалы</Link></li>
							<li><Link to='#' className="mainNav__link">OVA</Link></li>
							<li><Link to='#' className="mainNav__link">ONA</Link></li>
							<li><Link to='#' className="mainNav__link">Фильтры</Link></li>
							<li><Link to='#' className="mainNav__link">Расписание</Link></li>
						</ul>
					</nav>
					<div className="userBlock" onClick={this.showUser}>
						<Icon name='user'/>
					</div>
					{showUser &&
						<div className="userBlock__modal d-flex flex-column align-items-center">
							<div className="userBlock__icon">
								<Icon name='user'/>
							</div>
							<input onChange={this.editRegisterFields} value={login} name='login' className='userBlock__input' type="text" placeholder='Логин'/>
							<input onChange={this.editRegisterFields} value={password} name='password' className='userBlock__input' type="password" placeholder='Пароль'/>
							<button onClick={this.registerUser} className='userBlock__btn'>Зарегистрироваться</button>
						</div>
					}
				</div>
			</header>
		);
	}
}
const mapStateToProps = (state) => {
	return {}
};
const mapDispatchToProps = (dispatch) => {
	return {
		registerNewUser: (user) => dispatch(registerNewUser(user)),
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);