import PropTypes from 'prop-types'; // Importe a biblioteca
import './Input.scss'; // Importe o arquivo de estilos

export default function Input({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

// Defina os tipos das props
Input.propTypes = {
  type: PropTypes.string.isRequired, // Tipo string e obrigatório
  text: PropTypes.string.isRequired, // Tipo string e obrigatório
  name: PropTypes.string.isRequired, // Tipo string e obrigatório
  placeholder: PropTypes.string, // Tipo string (opcional)
  handleOnChange: PropTypes.func.isRequired, // Tipo função e obrigatório
  value: PropTypes.oneOfType([
    // Pode ser string ou número
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Obrigatório
};

Input.defaultProps = {
  placeholder: '', // Define um placeholder padrão caso não seja fornecido
};