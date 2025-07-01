import styled from "styled-components";
//#region button
const ButtonDef = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 28px;
  padding: 0 8px;
`;

export const BtnClose = styled(ButtonDef)`
  background: var(--color-bg-disable);
  min-width: 100px;
  font-weight: 600;
  &.disabled {
    border: none;
  }
`;

export const BtnSubmit = styled(ButtonDef)`
  background: var(--color-bg-primary);
  min-width: 100px;
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

export const BtnSell = styled.span`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.yellow {
    width: 50px;
    height: 20px;
    background: var(--color-bg-primary);
  }
  &.green {
    width: 50px;
    height: 20px;
    background: var(--color-bg-green);
  }
  &.yellow-mini {
    width: 30px;
    height: 15px;
    font-size: 10px;
    background: var(--color-bg-primary);
  }
  &.green-mini {
    width: 30px;
    height: 15px;
    font-size: 10px;
    background: var(--color-bg-green);
  }
`;

export const Tag = styled.span`
  border: 1px solid var(--color-bg-primary);
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  &.niem-yet {
    width: 45px;
    border: 1px solid var(--color-txt-primary);
    color: var(--color-txt-primary);
  }
  &.tsdb {
    width: 45px;
    border: 1px solid var(--color-txt-violet);
    color: var(--color-txt-violet);
  }
  &.bao-lanh {
    width: 70px;
    border: 1px solid var(--color-txt-green);
    color: var(--color-txt-green);
  }
`;
