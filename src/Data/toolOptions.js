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

const toolDataApplication = [
  {
    value: "React",
    url: "https://cdn.svgporn.com/logos/react.svg",
    description:
      "A declarative JavaScript library for building interactive UIs",
  },
  {
    value: "React2",
    url: "https://cdn.svgporn.com/logos/react.svg",
    description:
      "A declarative JavaScript library for building interactive UIs",
  },
];

const toolDataServer = [
  {
    value: "Node",
    url: "https://cdn.svgporn.com/logos/node.svg",
    description: "A JavaScript run time environemtn",
  },
  {
    value: "Node2",
    url: "https://cdn.svgporn.com/logos/node.svg",
    description: "A JavaScript run time environemtn",
  },
];

const toolOptionsApplication = toolDataApplication.map((option) => ({
  value: option.value,
  label: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={customStyles.optionText}>
        <span style={customStyles.optionTitle}>{option.value}</span>
        <span style={customStyles.optionSubtitle}>{option.description}</span>
      </div>
    </div>
  ),
}));

const toolOptionsServer = toolDataServer.map((option) => ({
  value: option.value,
  label: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={customStyles.optionText}>
        <span style={customStyles.optionTitle}>{option.value}</span>
        <span style={customStyles.optionSubtitle}>{option.description}</span>
      </div>
    </div>
  ),
}));

export { toolOptionsApplication, toolOptionsServer };
