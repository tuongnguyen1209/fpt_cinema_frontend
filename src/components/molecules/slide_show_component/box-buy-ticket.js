import { Tabs } from 'antd';
import React from "react";

const { TabPane } = Tabs;

const BoxBuyTicket = () => {
    return(
        <div className="box-buy-ticket">
                <form>
                  <span className="tem-box-ticket">MUA VÉ NHANH</span>
                  <Tabs defaultActiveKey="1">
                      <TabPane className="buy-sort" tab="THEO PHIM" key="1" >
                        <select defaultValue={0}>
                            <option value="0">CHỌN PHIM</option>
                            <option>CHỌN PHIM</option>
                        </select>
                        <select>
                            <option>CHỌN RẠP</option>
                        </select>
                        <select>
                            <option>CHỌN NGÀY</option>
                        </select>
                        <select>
                            <option>CHỌN XUẤT</option>
                        </select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO NGÀY" key="2">
                        <select>
                              <option>CHỌN NGÀY</option>

                        </select>
                        <select>
                              <option>CHỌN RẠP</option>

                        </select>
                        <select>
                              <option>CHỌN PHIM</option>

                        </select>
                        <select>
                              <option>CHỌN SUẤT</option>

                        </select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO RẠP" key="3">
                        <select>
                              <option>CHỌN RẠP</option>

                        </select>
                        <select>
                              <option>CHỌN PHIM</option>

                        </select>
                        <select>
                              <option>CHỌN NGÀY</option>

                        </select>
                        <select>
                              <option>CHỌN SUẤT</option>

                        </select>
                      </TabPane>
                  </Tabs>
                  <button className="btn-buy-ticket" type="submit">MUA VÉ</button>
                </form>
        </div>
    )
}

export default BoxBuyTicket