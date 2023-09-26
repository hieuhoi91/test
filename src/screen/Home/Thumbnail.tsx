'use client';

import React from 'react';
import styles from './thumbnail.module.scss';
import { Button, Card, CardContent } from '@mui/material';
import { CardCover } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import FormSelect from '@/components/common/FormSelect';
import { categories, destination, months, sorted } from '@/data/data';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FormInput from '@/components/common/FormInput';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Title from '@/components/common/Title';

const Thumnail = () => {
  const [isAdvancedSearch, setIsAdvancedSearch] = React.useState(false);

  return (
    <div className={styles.thumbnail}>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
          >
            <source src="/video-thumbnail.mp4" type="video/mp4" />
          </video>
        </CardCover>
        <CardContent>
          <div className={styles.content}>
            <Title
              title="Where do you want to go?"
              description="Trips, experiences, and places. All in one service."
            />
            <div className={styles.search}>
              <FormInput
                icon={<SearchIcon />}
                placeholder="Destination, city"
              />
              <FormSelect
                list={months}
                icon={<CalendarMonthIcon />}
                defaultValue="Any Month"
              />
              <FormSelect
                list={sorted}
                icon={<ImportExportIcon />}
                defaultValue="Sort By Date"
              />
              <Button className={styles.btn_search}>Search</Button>
            </div>
            {isAdvancedSearch ? (
              <div className={styles.advanced_search}>
                <FormSelect
                  list={categories}
                  icon={<KeyboardArrowDownIcon />}
                  defaultValue="All Categories"
                />
                <FormSelect
                  list={destination}
                  icon={<KeyboardArrowDownIcon />}
                  defaultValue="Any Destinations"
                />
                <FormInput
                  icon={<AttachMoneyIcon />}
                  placeholder="Max budget ex. 500"
                />
              </div>
            ) : null}
            <div className={styles.wrapper_btn_advanced_search}>
              <button
                className={styles.btn_advanced_search}
                onClick={() => {
                  setIsAdvancedSearch(!isAdvancedSearch);
                }}
              >
                {!isAdvancedSearch ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
                Advanced Search
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Thumnail;
