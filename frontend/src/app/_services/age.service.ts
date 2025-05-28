import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AgeService {
  public getCurrentAge(): number {
    return this.calculateAge('1990-08-24');
  }

  private calculateAge(birthDate: Date | string): number {
    const date = new Date(birthDate);
    const today = new Date();

    let age = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - date.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }
}