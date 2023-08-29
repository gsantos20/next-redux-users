import { useDispatch } from "react-redux";

export const Header = (props) => {
	return (
    <div className="d-flex justify-content-between">
			Gerenciar Usuarios
			<button
				className="btn btn-primary btn-icon"
				onClick={props.onShow}
			>
				<i className="fa fa-plus"></i> Criar Novo
			</button>
    </div>
	);
}
