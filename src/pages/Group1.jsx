import './Group1.css'

export default function Group1() {
  return (
    <div className="group-1">
      <div className="reservation-card-1">
        <div className="reservation-card">
          <div className="rectangle-2">
          </div>
          <div className="input-text-3">
            <span className="o">
            nUMERO huespedes
            </span>
            <div className="input-empty-corner-all-2">
              <span className="partout">
              #
              </span>
            </div>
          </div>
          <div className="container">
            <div className="input-text">
              <span className="arrive">
              Llegada
              </span>
              <div className="input-empty-corner-right">
                <span className="jjmmaaaa">
                dd/mm/aaaa
                </span>
              </div>
            </div>
            <div className="input-text-1">
              <span className="dpart">
              Salida
              </span>
              <div className="input-empty-corner-left">
                <span className="jjmmaaaa-1">
                dd/mm/aaaa
                </span>
              </div>
            </div>
          </div>
          <div className="input-text-2">
            <span className="voyageurs">
            Precio total
            </span>
            <div className="input-empty-corner-all">
              <span className="voyageurs-1">
              #
              </span>
            </div>
          </div>
          <div className="cta-main">
            <span className="boton">
            Reservar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}