import "@/components/animations/css/common/global-loader.css";

export default function Loading() {
  return (
    <div
      className="sth-global-loader"
      role="status"
      aria-label="Loading"
    >
      <div className="sth-global-loader__content">
        <div className="sth-global-loader__mark">
          <span className="sth-global-loader__ring sth-global-loader__ring--orange" />
          <span className="sth-global-loader__ring sth-global-loader__ring--purple" />

          <div className="sth-global-loader__core">
            <span className="sth-global-loader__sun" />
          </div>
        </div>

        <div className="sth-global-loader__brand">
          <span className="sth-global-loader__brand-orange">
            SOLAR
          </span>

          <span className="sth-global-loader__brand-purple">
            TRADE HUB
          </span>
        </div>

        <div className="sth-global-loader__bar">
          <span />
        </div>

        <p className="sth-global-loader__text">
          Loading Solar Trade Hub...
        </p>
      </div>
    </div>
  );
}