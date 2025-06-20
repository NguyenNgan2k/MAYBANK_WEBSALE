import styled from "styled-components";
//#region button
const ButtonDef = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 14px;
  height: 38px;
  padding: 0 12px;
`;

export const BtnClose = styled(ButtonDef)`
  background: var(--color-bg-card);
  min-width: 75px;
  color: var(--color-text-error);
  font-weight: 500;
  border: 1px solid var(--color-bd-input-error);
  &.disabled {
    border: none;
  }
  &.blue {
    border: 1px solid var(--color-border-input);
    color: var(--color-text-subtitle);
  }
`;

export const BtnSubmit = styled(ButtonDef)`
  background: var(--color-natural-4);
  min-width: 100px;
  color: var(--color-text-white);
  font-weight: 600;

  &.danger {
    background: var(--color-bg-sell);
  }
  &.success {
    background: var(--color-button-success);
    border-color: var(--color-button-success);
  }
  &.info {
    background: var(--color-bg-buy);
  }
  &.warning {
    background: rgb(245 158 11);
    border-color: rgb(245 158 11);
  }
  &.primary {
    background: #ec5e0f;
    border-color: #ec5e0f;
  }
  &:disabled {
    background: var(--color-white-700);
    color: var(--color-text-subtitle);
  }
`;
