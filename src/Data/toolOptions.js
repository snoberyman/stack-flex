export const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: "100%",
    margin: "auto",
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    cursor: "pointer",
  }),
  optionImage: {
    marginRight: "10px",
    width: "40px",
    height: "35px",
    objectFit: "cover",
  },
  optionText: {
    display: "flex",
    flexDirection: "column",
  },
  optionTitle: {
    fontSize: "14px",
    fontWeight: "500",
  },
  optionSubtitle: {
    fontSize: "12px",
    color: "#666",
  },
};

export const toolOptions = [
  {
    value: "React",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
  {
    value: "React2",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React2</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
  {
    value: "React3",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React3</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
  {
    value: "React4",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React4</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
  {
    value: "React5",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React5</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
  {
    value: "React6",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React6</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
  {
    value: "React7",
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.svgporn.com/logos/react.svg"
          alt="Ocean"
          style={customStyles.optionImage}
        />
        <div style={customStyles.optionText}>
          <span style={customStyles.optionTitle}>React7</span>
          <span style={customStyles.optionSubtitle}>
            A declarative JavaScript library for building interactive UIs
          </span>
        </div>
      </div>
    ),
  },
];
